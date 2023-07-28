import * as Api from '../utils/api';

export const getRecordTemplates = () => {
    const res = Api.get('record-templates');
    console.log(res);
    return res;
};
