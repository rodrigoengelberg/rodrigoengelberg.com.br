import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

import POSTSJSON from '../json/postsResponse.json';

export const countAllPosts = async (query = ''): Promise<any> => {
  // const url = `${POSTS_URL}/count?${query}`;
  // const totalPosts = await fetchJson<string>(url);
  const totalPosts = POSTSJSON;
  return totalPosts;
};
