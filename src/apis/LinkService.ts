import * as Api from '../api.ts';

export const getArchiveLinks = () => {
  const res = Api.get('archive-links');
  console.log(res);
  return res;
};
