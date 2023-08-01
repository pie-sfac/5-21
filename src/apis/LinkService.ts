import { addLinkDataType } from '../types/link/linkType.ts';
import * as Api from '../utils/api.ts';

// 카테고리 전체 가져오기
export const getArchiveLinkCategoriesApi = () => {
  try {
    const res = Api.get('archive-link-categories');
    return res;
  } catch (error) {
    console.log(error);
  }
};
//AddLink
export const addLinkApi = (data: addLinkDataType) => {
  try {
    const res = Api.post('archive-links', data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllLinksApi = () => {
  try {
    const res = Api.get('archive-links');
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getLinkApi = (categoryId: number) => {
  try {
    const res = Api.get(`archive-links/:${categoryId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
