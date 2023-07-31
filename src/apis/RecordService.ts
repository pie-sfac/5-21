import * as Api from '../utils/api';

export const getRecordTemplates = async () => {
    try {
        const res = await Api.get('record-templates');
        return res;
    } catch (error) {
        console.error('Error fetching record templates:', error);
        throw error;
    }
};
