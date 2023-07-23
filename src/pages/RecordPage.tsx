import { useState } from 'react';
import * as S from './Record.modules';
// Components
import Header from '../components/Header';
import TitleSection from '../components/TitleSection';
import TabSection from '../components/TabSection';
import Modal from '../components/record/CreateModal';

const RecordManagement = () => {
    const [modal, setModal] = useState(false);

    return (
        <S.RecordWrapper>
            <Header />
            <S.RecordContent>
                <TitleSection />
                <TabSection setModal={setModal} />
            </S.RecordContent>

            {modal && <Modal setModal={setModal} />}
        </S.RecordWrapper>
    );
};

export default RecordManagement;
