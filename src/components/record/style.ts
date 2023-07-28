import styled, { keyframes } from 'styled-components';
// img
import interview from '../../assets/icon-item-interview.svg';
import interviewHover from '../../assets/icon-item-interview-hover.svg';
import treatment from '../../assets/icon-item-treatment.svg';
import treatmentHover from '../../assets/icon-item-treatment-hover.svg';

// ============= RecordContent =============
export const RecordContent = styled.main`
    width: 100%;
    height: calc(100% - 50px);
    background: #fafbff;
`;
export const TitleSection = styled.section`
    width: 100%;
    height: 66px;
    padding: 0px 40px;
    background-color: #fafbff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const RecordTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
`;
export const CreateTemplateBtn = styled.button`
    height: 36px;
    padding: 0px 16px;
    color: #fff;
    border-radius: 6px;
    background: #2d62ea;
    transition: all ease-in-out 0.2s;
    &:hover {
        background-color: #1850de;
        box-shadow: 0px 6px 10px 0px rgba(45, 98, 234, 0.2);
    }
`;
export const AddIcon = styled.img`
    margin-right: 4px;
    vertical-align: middle;
`;

// ============= Tab =============
export const TabSection = styled.section`
    width: 100%;
    height: calc(100% - 66px);
`;
export const TabWrapper = styled.ul`
    width: 100%;
    height: 40px;
    padding: 0 24px;
    display: flex;
`;

// ============= Tab-content =============
export const TabContent = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    padding: 24px;
    background-color: #f2f5ff;
`;
export const TabContentHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 0px 20px 16px;
`;
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const TabContentTitle = styled.h3`
    font-size: 15px;
    font-weight: 500;
`;
export const CountLabel = styled.div`
    color: #fff;
    height: 22px;
    padding: 0px 12px;
    line-height: 24px;
    border-radius: 6px;
    background: #2d62ea;
    margin-left: 8px;
`;
export const SortSelect = styled.select`
    width: 116;
    height: 34px;
    padding: 0px 10px;
    border-radius: 6px;
    border: 1px solid #e7e7e7;
    background: #fff;
    margin-right: 8px;
`;
export const SeleteOption = styled.option``;

export const CategoryContent = styled.div`
    width: 100%;
    height: auto;
    &.grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        /* grid-template-rows: repeat(2, 1fr); */
        grid-gap: 20px;
    }
`;
export const TabContentFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    position: relative;
`;
export const FooterItemCount = styled.p`
    position: absolute;
    left: 0px;
    top: 0;
    color: #999999;
`;

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
    padding: 20px;

    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 30px 0px #e7e9f2;
    transition: all ease-in-out 0.3s;

    &:hover p {
        color: #fff;
    }
    &:hover div > div:first-of-type {
        background: rgba(232, 238, 255, 0.29);
    }

    &.interview:hover span {
        background-image: url(${interviewHover});
    }
    &.treatment:hover span {
        background-image: url(${treatmentHover});
    }

    &.interview:hover {
        z-index: 1;
        border-radius: 10px;
        background: linear-gradient(135deg, #3f9ceb 0%, #3e9cec 0.01%, #6457fb 100%);
        box-shadow: 20px 20px 30px 0px rgba(0, 0, 0, 0.24);
    }
    &.treatment:hover {
        z-index: 1;
        border-radius: 10px;
        background: linear-gradient(135deg, #c496ff 0%, #652bec 100%);
        box-shadow: 20px 20px 30px 0px rgba(0, 0, 0, 0.2);
    }

    &.treatment p:first-of-type {
        color: #ac5bf7;
    }
    &.treatment:hover p:first-of-type {
        color: #fff;
    }
`;
export const CategoryItemInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const ItemImgBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    &.interview {
        background-color: #e8eeff;
    }
    &.treatment {
        background: #f3e8ff;
    }
`;
export const ItemImg = styled.span`
    display: block;
    width: 40px;
    height: 40px;
    &.interview {
        background-image: url(${interview});
        background-position: center;
        background-repeat: no-repeat;
    }
    &.treatment {
        background-image: url(${treatment});
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const ItemCategory = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #6691ff;
    margin-bottom: 8px;
`;
export const ItemTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
`;
export const ItemDesc = styled.p`
    color: #888;
    width: 260px;
    line-height: 22px;
    margin: 24px 0px;
    /* white-space: nowrap;
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis; */
`;
export const ItemDate = styled.p`
    color: #aaa;
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
