# Newsletter templates

HTML email templates for Brevo, in the Tango MJ brand style (colours and type from
`src/styles/global.css`). They are not part of the website build: paste a file's
HTML into Brevo's code editor.

| File | Brevo use | Language |
|---|---|---|
| `2_double-opt-in-confirmation.en.html` | Double opt-in confirmation email of the sign-up form | English |
| `3_subscription-confirmed.en.html` | Final confirmation email ("Thanks for subscribing") after the opt-in | English |
| `1_added-to-list.en.html` | "Thanks for subscribing. You have been added to our mailing list." | English |
| `4_unsubscribe-confirmation.en.html` | Unsubscribe confirmation ("We will miss you!") | English |

- `{{ doubleoptin }}` (double opt-in template) is filled in by Brevo with the confirmation link; keep it as is.
- The logo is the website's own image, `https://www.tangomj.nl/_astro/logo_web_tr.s8b8L3hm_2l6g0S.webp`.
  Astro generates that file name, so it can change after a site update; if the
  logo disappears from the emails, copy the new URL from the site.
- Name new templates `<number>_<purpose>.<language>.html` (e.g. `2_double-opt-in-confirmation.nl.html`).
