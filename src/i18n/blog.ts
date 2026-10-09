/**
 * Blog helpers: which articles exist in each language, and the paths of an
 * article's translations. Articles live in src/content/blog/<language>/<slug>.md.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGUAGES, blogPostPath, type Language } from './languages';

export type BlogPost = CollectionEntry<'blog'>;

/** "en/my-article" -> { language: 'en', slug: 'my-article' } */
export function splitPostId(post: BlogPost): { language: Language; slug: string } {
  const [language, ...rest] = post.id.split('/');
  return { language: language as Language, slug: rest.join('/') };
}

/** Articles in one language, newest first. */
export async function getPostsInLanguage(language: Language): Promise<BlogPost[]> {
  const posts = await getCollection('blog', (post) => splitPostId(post).language === language);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Paths of the same article (same slug) in every language it exists in. */
export async function getPostTranslations(slug: string): Promise<Partial<Record<Language, string>>> {
  const posts = await getCollection('blog', (post) => splitPostId(post).slug === slug);
  const paths: Partial<Record<Language, string>> = {};
  for (const post of posts) {
    const { language } = splitPostId(post);
    if (LANGUAGES.includes(language)) paths[language] = blogPostPath(language, slug);
  }
  return paths;
}

/** getStaticPaths for the article route of one language. */
export async function getPostRoutes(language: Language) {
  const posts = await getPostsInLanguage(language);
  return posts.map((post) => ({ params: { slug: splitPostId(post).slug }, props: { post } }));
}
