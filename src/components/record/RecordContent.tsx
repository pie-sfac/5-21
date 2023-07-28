import React, { useState } from 'react';
import * as S from './style';

// Components
import CreateModal from '../record/CreateModal';

const RecordContent = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <S.RecordContent>
            <S.TitleSection></S.TitleSection>

            {/* modal */}
            {modal && <CreateModal setModal={setModal} />}
        </S.RecordContent>
    );
};

export default RecordContent;
