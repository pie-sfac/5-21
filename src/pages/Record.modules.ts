import styled from 'styled-components';

// ============= Common =============
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RecordWrapper = styled.div`
    width: calc(100% - 260px);
`;

// ============= Record Interview New =============
export const interviewNewContent = styled.main`
    width: 100%;
    height: 100%;
    background: #fafbff;
`;
export const TitleSection = styled.section`
    width: 100%;
    height: 66px;
    padding: 0px 40px;
    display: flex;
    background-color: #fafbff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const RecordTitle = styled.section`
    font-size: 18px;
    font-weight: 500;
`;
export const ContentSection = styled.section`
    width: 100%;
    height: 100%;
    background-color: #f2f5ff;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ced9ff;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background-color: #e8edff;
    }
`;

// 1. CreateTemplateSection
export const CreateTemplateSection = styled.div`
    width: calc(100% - 468px);
    height: 200%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 100px;
`;
export const TemplateForm = styled.div`
    width: 1000px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(231, 233, 242, 0.5);
    margin-bottom: 24px;
`;
// form - header
export const TemplateHeader = styled.div`
    width: 100%;
    height: 48px;
    padding: 0px 20px;
    border-bottom: 1px solid #f1f3f6;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const TemplateHeaderTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const TemplateIconBox = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid #f1f3f6;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TemplateIcon = styled.img``;
export const TemplateType = styled.h3`
    color: #2d62ea;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
`;
export const ToggleArrowBtn = styled.button`
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    outline: none;
`;
export const ToggleArrowIcon = styled.img`
    vertical-align: middle;
`;

// form - content
export const TemplateContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 20px 4px 20px;
`;
export const InputWrapper = styled.div`
    padding-bottom: 16px;
`;
export const TemplateTitleLabel = styled.label`
    color: #444;
    font-weight: 500;
`;
export const TemplateTitleInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 6px;
    background: #f8f9fe;
    padding-left: 10px;
    margin-top: 12px;
    border: 1px solid transparent;
    transition: all ease-in-out 0.2s;

    &::placeholder {
        color: #aaa;
    }
    &:focus {
        border: 1px solid #2d62ea;
    }
`;
export const TemplateDescLabel = styled.label`
    color: #888;
    font-weight: 500;
`;
export const TemplateDescInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background: #f8f9fe;
    padding-left: 10px;
    margin-top: 12px;
    &::placeholder {
        color: #aaa;
    }
`;

// 2. Fixed-menu
export const FixedMenuSection = styled.div`
    width: 468px;
    height: 100vh;
    padding: 24px;
`;
export const FixedMenu = styled.aside`
    position: fixed;
    width: 420px;
    background: #fff;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 30px 0px rgba(225, 227, 237, 0.8);
`;
export const FixedMenuHeader = styled.header`
    width: 100%;
    padding: 16px;
`;
export const HeaderTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
`;
export const TabWrapper = styled.div`
    width: 100%;
    padding: 0 8px;
    display: flex;
`;
export const TabContent = styled.div`
    width: 100%;
    padding: 16px;
    border-top: 1px solid #f3f5f9;
`;
export const FixedMenuUl = styled.ul`
    width: 100%;
    height: 100%;
    & > li:last-child {
        margin-bottom: 0px;
    }
`;
export const FixedMenuLi = styled.li`
    margin-bottom: 16px;
`;
export const FixedMenuFooter = styled.div`
    padding: 16px;
    border-top: 1px solid #f1f3f6;
`;
export const SaveBtn = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 6px;
    color: #fff;
    background-color: #2d62ea;
    transition: all ease-in-out 0.2s;

    &:hover {
        background-color: #1850de;
    }
`;
