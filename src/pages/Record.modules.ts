import styled from 'styled-components';

export const RecordWrapper = styled.div`
    width: 100%;
`;
export const RecordContent = styled.main`
    width: 100%;
    height: 100%;
`;

// ============= RecordInterviewNew =============
export const NewWrapper = styled.main`
    width: 100%;
    background-color: #f8f9fe;
    display: flex;
    flex-direction: row;
`;
export const NewContent = styled.section`
    width: calc(100% - 450px);
`;
export const Content = styled.div`
    width: 100%;
    padding: 24px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const FormTemplate = styled.div`
    width: 1000px;
    height: 100%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(231, 233, 242, 0.5);
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
    color: #888;
    font-family: Pretendard;
    font-weight: 500;
`;
export const TemplateTitleInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background: #f8f9fe;
    padding-left: 10px;
    margin-top: 12px;
    &::placeholder {
        color: #ccc;
    }
`;
export const TemplateDescLabel = styled.label`
    color: #888;
    font-family: Pretendard;
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
        color: #ccc;
    }
`;

// Fiexd Menu
export const FixedMenu = styled.aside`
    width: 450px;
    height: 100vh;
    border-left: 1px solid #f3f5f9;
    background: #fff;
`;
export const FixedMenuHeader = styled.header`
    width: 100%;
    height: 56px;
    padding-left: 16px;
    padding-top: 24px;
`;
export const HeaderTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    /* line-height: 56px; */
`;
export const TabContent = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    border-top: 1px solid #f3f5f9;
`;
export const FixedMenuUl = styled.ul`
    width: 100%;
    height: 100%;
`;
export const FixedMenuLi = styled.li`
    margin-bottom: 16px;
`;
