/**
 * Cookie consent — the single source of truth.
 *
 * Every script that needs consent (today: Google Analytics) asks this module
 * before it runs, and listens for changes. The banner and settings dialog
 * (components/CookieConsent.astro) are the only places that write it.
 *
 * Storage: one localStorage entry. It holds no personal data — only which
 * optional categories the visitor accepted, when, and under which version of
 * the consent text. Storing this choice is itself strictly necessary.
 *
 * Categories: "necessary" is always on. "analytics" is the only optional
 * category because Google Analytics is the only optional technology the site
 * uses (see /cookie-policy). If marketing tools are ever added, add a
 * "marketing" category here and in the banner — do not add it before then.
 */

export type OptionalCategory = 'analytics';

export interface ConsentState {
  /** Bump CONSENT_VERSION when the categories or the consent text change: everyone is asked again. */
  version: string;
  /** ISO date-time of the decision. */
  timestamp: string;
  necessary: true;
  analytics: boolean;
}

export const CONSENT_VERSION = '1.0';
const STORAGE_KEY = 'tangomj-cookie-consent';
/** A decision is valid for 12 months; after that the banner asks again. */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const CHANGE_EVENT = 'tangomj:consentchange';

/** The stored decision, or null if there is none (or it is outdated / unreadable). */
export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<ConsentState>;
    const age = Date.now() - Date.parse(data.timestamp ?? '');
    if (
      data.version !== CONSENT_VERSION ||
      typeof data.analytics !== 'boolean' ||
      !(age >= 0 && age < MAX_AGE_MS)
    ) {
      return null;
    }
    return { version: data.version, timestamp: data.timestamp!, necessary: true, analytics: data.analytics };
  } catch {
    // Storage blocked (e.g. strict privacy mode) or corrupt entry: treat as "no decision yet".
    return null;
  }
}

/** Has the visitor accepted this optional category? No decision means no. */
export function hasConsent(category: OptionalCategory): boolean {
  return readConsent()?.[category] === true;
}

/** Save a decision and tell every listener on this page about it. */
export function saveConsent(choices: Record<OptionalCategory, boolean>): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    necessary: true,
    analytics: choices.analytics === true,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // If storage is blocked the choice still applies to this page view; the banner returns next visit.
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CHANGE_EVENT, { detail: state }));
  return state;
}

/**
 * Run `callback` whenever the decision changes — on this page, or in another
 * tab of the same site (via the storage event).
 */
export function onConsentChange(callback: (state: ConsentState | null) => void): void {
  window.addEventListener(CHANGE_EVENT, (event) => {
    callback((event as CustomEvent<ConsentState>).detail);
  });
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) callback(readConsent());
  });
}
