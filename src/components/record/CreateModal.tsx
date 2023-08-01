import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
// Components
import Button from '../Button';
// img
import closeIcon from '../../assets/icon-close-btn.svg';

interface CreateModalProps {
    setModal: (value: boolean) => void;
}

const CreateModal = ({ setModal }: CreateModalProps) => {
    const navigate = useNavigate();
    const categoryArr = [
        { id: 0, title: '문진 템플릿', desc: '첫 방문 또는 회원 현재 상태를 체크 합니다.' },
        { id: 1, title: '처치 템플릿', desc: '수업 시, 작성합니다.' },
    ];
    const handleCloseModal = () => {
        setModal(false);
    };

    const handleCategoryNav = (id: number) => {
        if (id === 0) {
            navigate('/record/interview');
        } else if (id === 1) {
            navigate('/record/treatment');
        }
    };

    useEffect(() => {
        document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: hidden;
        width: 100%;
        height: 100vh;
        `;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    return (
        <S.ModalWrapper>
            <S.Modal>
                <S.ModalHeader>
                    <S.ModalTitle>템플릿 생성</S.ModalTitle>
                    <S.CloseBtn onClick={handleCloseModal}>
                        <S.CloseImg src={closeIcon} alt='btn-close-icon' />
                    </S.CloseBtn>
                </S.ModalHeader>
                <S.ModalContent>
                    <S.ModalDesc>문진과 처치를 선택해주세요.</S.ModalDesc>
                    <S.CategoryWrapper>
                        {categoryArr.map((item) => (
                            <S.Category key={item.id} onClick={() => handleCategoryNav(item.id)}>
                                <S.CategoryIconBox></S.CategoryIconBox>
                                <S.CategoryTitleWrapper>
                                    <S.CategoryTitle>{item.title}</S.CategoryTitle>
                                    <S.CategoryDesc>{item.desc}</S.CategoryDesc>
                                </S.CategoryTitleWrapper>
                            </S.Category>
                        ))}
                    </S.CategoryWrapper>
                </S.ModalContent>
                <S.ModalFooter>
                    <Button text={'닫기'} type={'Primary'} onClick={handleCloseModal} />
                </S.ModalFooter>
            </S.Modal>
        </S.ModalWrapper>
    );
};
export default CreateModal;
