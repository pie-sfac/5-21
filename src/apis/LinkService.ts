import * as Api from '../utils/api.ts';

export const getArchiveLinks = () => {
  const res = Api.get('archive-links');

  return res;
};
// 카테고리 전체 가져오기
export const getArchiveLinkCategories = () => {
  try {
    const res = Api.get('archive-link-categories');
    return res;
  } catch (error) {
    console.log(error);
  }
};
