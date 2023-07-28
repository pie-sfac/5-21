import { useEffect } from 'react';
import { getRecordTemplates } from '../apis/RecordService';

const RecordTemplateItem = () => {
    useEffect(() => {
        getRecordTemplates().then((res) => console.log(res.data));
    }, []);

    return (
        <div>
            <h3>{'테스트 페이지 입니다'}</h3>
        </div>
    );
};

export default RecordTemplateItem;
