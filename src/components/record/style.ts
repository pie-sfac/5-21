import styled, { keyframes } from 'styled-components';

// ============= CategoryItem =============
export const CategoryItem = styled.div`
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 40px;

    border-radius: 10px;
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0px 10px 30px 0px #e7e9f2;
    transition: all ease-in-out 0.2s;

    &:hover {
        border: 1px solid #275cf5;
        background: #f9faff;
        box-shadow: 0px 10px 30px 0px #c6cbe3;
    }
`;
export const CategoryItemInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const CategoryLabel = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;

    width: 60px;
    height: 24px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;

    &.diagnosis {
        background: #dcf9f9;
        color: #48caca;
    }
    &.prescription {
        background: #ecefff;
        color: #97aeea;
    }
`;
export const ItemImgBox = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &.diagnosis {
        background: #dcf9f9;
    }
    &.prescription {
        background: #ecefff;
    }
`;
export const ItemImg = styled.img``;
export const ItemTitle = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    margin: 26px 0px;
    width: 110px;
    white-space: wrap;
    word-break: keep-all;
`;
export const ItemDesc = styled.p`
    color: #888;
    width: 196px;
    white-space: nowrap;
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
`;
export const ItemDate = styled.p`
    color: #9999;
    font-size: 12px;
    margin-top: 10px;
`;

// ============= CreateModal =============
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(40, 40, 40, 0.6);
`;
const ModalFade = keyframes`
    0% {
    transform: translate(-50%, -45%);
  }
    100% {
  }
`;
export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 110;

    width: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);

    animation: ${ModalFade} 0.2s linear;
`;

// Header
export const ModalHeader = styled.div`
    width: 100%;
    padding: 14px 16px;
    border-bottom: 1px solid #f1f3f6;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ModalTitleWrapper = styled.div``;
export const ModalTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
`;
export const CloseBtn = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    outline: none;
    background-color: transparent;
`;
export const CloseImg = styled.img``;

// Content
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
export const ModalDesc = styled.p`
    font-weight: 400;
`;
export const CategoryWrapper = styled.ul``;
export const Category = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 16px;
    border-radius: 10px;
    margin-top: 16px;
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0px 2px 10px 0px rgba(231, 233, 242, 0.7);
    transition: all ease-in-out 0.3s;

    &:hover {
        border: 1px solid #275cf5;
        background: #edf2ff;
        box-shadow: 0px 4px 10px 0px #e7e9f2;
    }
    &:hover > div:first-child {
        background-color: #275cf5;
    }
`;
export const CategoryIconBox = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 12px;
    border-radius: 6px;
    background-color: #ecefff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.3s;
`;
export const CategoryIcon = styled.img``;

export const CategoryTitleWrapper = styled.div``;

export const CategoryTitle = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 4px;
`;
export const CategoryDesc = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #505050;
`;

// Footer
export const ModalFooter = styled.div`
    width: 100%;
    padding: 14px 0px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #f1f3f6;
`;

// ============= FixedMenuItem =============
export const FixedMenuItem = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0px 2px 10px 0px rgba(231, 233, 242, 0.7);

    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: all ease-in-out 0.2s;

    &:hover {
        border-radius: 10px;
        border: 1px solid #275cf5;
        background: #f3f7ff;
        box-shadow: 0px 4px 10px 0px #e7e9f2;
    }
    &:hover > div:first-child,
    &:hover > div:last-child {
        background-color: #d6e2ff;
    }
    &.professional > div:last-child {
        background: #e6f9ea;
        color: #1fb881;
    }
    &.professional:hover > div:last-child {
        background: #d1f4d8;
    }
`;
export const FixedItemImgBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebf1ff;
    transition: all ease-in-out 0.2s;
`;
export const FixedItemImg = styled.img``;
export const ItemTitleWrapper = styled.div`
    padding-left: 12px;
`;
export const FixedItemTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
`;
export const FixedItemDesc = styled.div`
    font-weight: 400;
    color: #505050;
`;
export const FixedItemLabel = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 8px;
    border-radius: 100px;
    background: #ebf1ff;
    font-size: 12px;
    font-weight: 400;
    color: #6691ff;
    transition: all ease-in-out 0.2s;
`;
