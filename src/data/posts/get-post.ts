import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<any[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData>(url);
  const content = await markdownToHtml(jsonPosts.content);
  const finalContent = { ...jsonPosts, content };
  return [finalContent];
};
