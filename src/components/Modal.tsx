import { useEffect } from 'react';
import * as S from './style';
// Components
import Button from './Button';
import closeIcon from '../assets/icon-close-btn.svg';

interface ModalProps {
    type: string;
    btnType?: string;
    headerTitle?: string;
    contentTitle: string;
    contentDesc: string;
    setModal: (value: boolean) => void;
}

const Modal = ({ setModal, type, btnType, headerTitle, contentTitle, contentDesc }: ModalProps) => {
    const splitContent = contentDesc.split('\n');

    const handleCloseModal = () => {
        setModal(false);
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
                    <S.ModalHeaderTitle>{headerTitle}</S.ModalHeaderTitle>
                    <S.CloseBtn>
                        <S.CloseImg src={closeIcon} onClick={handleCloseModal} />
                    </S.CloseBtn>
                </S.ModalHeader>
                <S.ModalContent>
                    <S.ModalContentTitle className={type}>{contentTitle}</S.ModalContentTitle>
                    {splitContent.map((item, index) => (
                        <S.ModalDesc key={index}>{item}</S.ModalDesc>
                    ))}
                </S.ModalContent>
                <S.ModalFooter className={btnType}>
                    <Button type={'secondary'} text={'취소'} onClick={handleCloseModal} />
                    <Button type={'primary'} text={'계속 작성하기'} onClick={handleCloseModal} />
                </S.ModalFooter>
            </S.Modal>
        </S.ModalWrapper>
    );
};

export default Modal;
