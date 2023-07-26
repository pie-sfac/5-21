import * as Api from '../utils/api.ts';

export const getArchiveLinks = () => {
  const res = Api.get('archive-links');
  console.log(res);
  return res;
};
