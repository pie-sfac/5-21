import { useState } from 'react';
import styled from 'styled-components';
// Components
import Modal from '../components/Modal';
import Button from '../components/Button';
import TitleSection from '../components/TitleSection';
import Pagination from '../components/Pagination';
import ViewOption from '../components/ViewOption';

const Common = () => {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    return (
        <CommonWrapper>
            <TitleSection
                // home 기준으로 각 페이지별 depth 작성시 breadcrumb 자동 생성되며
                // 가장 마지막 depth로 title 자동 적용
                depth01={'depth01'}
                depth02={'depth02'}
                depth03={'depth03'}
            />

            <CommonContent>
                <CommonTitle>Common Component</CommonTitle>

                <Button
                    // 1. 타입 : secondary, delete / type 없을 경우: default 적용
                    type={''}
                    // 2. 버튼 이름
                    text={'모달창 열기'}
                    // 3. 버튼 클릭 이벤트 (각자 화면에 맞는 props 적용)
                    onClick={handleOpenModal}
                />

                {modal && (
                    <Modal
                        // 1. 모달 켜고 끄는 state는 알아서 추가해서 사용바랍니다.
                        setModal={setModal}
                        // 2. 모달 헤더 타이틀 입니다. (시안 보고 있는 사람들만 작성)
                        headerTitle={''}
                        // 3. 타입 : confirm, complete, delete
                        type={'confirm'}
                        // 4. button 개수에 따라 적용/ 타입: double(2개) / 안 쓸 경우 버튼 하나로 적용
                        btnType={'double'}
                        // 5. 모달 내용부분 : 타이틀
                        contentTitle={'저장되지 않은 변경 사항'}
                        // 6. 모달 내용부분 : 설명 / 설명이 한 줄이 아닐 경우: '\n'으로 구분
                        contentDesc={'저장되지 않은 변경 사항이 있습니다.\n저장하지 않고 페이지를 나가시겠습니까?'}
                    />
                )}

                {/* 🔥 selete, option 커스터마이징 필요! 🔥 */}
                <ViewOption />

                {/* 🔥 pagination 추후 진행 예정 (검색 예정) 🔥 */}
                <Pagination />
            </CommonContent>
        </CommonWrapper>
    );
};

export default Common;

const CommonWrapper = styled.div`
    width: 100%;
    height: 100vh;
`;
const CommonContent = styled.div`
    width: 100%;
    padding: 20px 72px;
    border-top: 1px solid #f1f3f6;
    & > button {
        margin-bottom: 24px;
    }

    & > div {
        margin-bottom: 24px;
    }
`;
const CommonTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 24px;
`;
