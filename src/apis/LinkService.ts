import Storage from '../storage/Session.ts';
import * as Api from '../utils/api.ts';
import axiosInstance from '../utils/axiosInstance.ts';

export const getArchiveLinks = () => {
  const res = Api.get('archive-links');

  return res;
};
// 카테고리 전체 가져오기
// export const getArchiveLinkCategories = () => {
//   try {
//     const res = Api.get('archive-link-categories');
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

export async function getArchiveLinkCategories(endpoint: string) {
  const res = await axiosInstance.get(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Storage.getTokenItem()}`,
    },
  });
  return res.data;
}
