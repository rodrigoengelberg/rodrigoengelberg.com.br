import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

import POSTSJSON from '../json/postsResponse.json';

export const getAllPosts = async (query = ''): Promise<any[]> => {
  // const url = `${POSTS_URL}?&${query}`;
  // const posts = await fetchJson<PostData[]>(url);
  const posts = POSTSJSON;
  return posts;
};
