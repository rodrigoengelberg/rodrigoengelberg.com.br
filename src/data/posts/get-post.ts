import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

import POSTSJSON from '../json/postsResponse.json';

export const getPost = async (slug: string | string[]): Promise<any[]> => {
  // const slugString = Array.isArray(slug) ? slug[0] : slug;
  // const url = `${POSTS_URL}?slug=${slugString}`;
  // const jsonPosts = await fetchJson<PostData[]>(url);

  const jsonPosts = POSTSJSON.findIndex(post => post.slug === slug);
  const content = await markdownToHtml(POSTSJSON[jsonPosts].content);
  const finalContent = { ...POSTSJSON[jsonPosts], content };
  
  return [finalContent];
};
