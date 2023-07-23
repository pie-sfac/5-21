import { useState } from 'react';
import * as S from './Record.modules';
// Components
import TitleSection from '../components/TitleSection';
import TabSection from '../components/TabSection';
import Modal from '../components/record/CreateModal';

const RecordManagement = () => {
    const [modal, setModal] = useState(false);

    return (
        <S.RecordWrapper>
            <S.RecordContent>
                <TitleSection depth01={'기록 관리'} depth02={''} depth03={''} />
                <TabSection setModal={setModal} />
            </S.RecordContent>

            {modal && <Modal setModal={setModal} />}
        </S.RecordWrapper>
    );
};

export default RecordManagement;
