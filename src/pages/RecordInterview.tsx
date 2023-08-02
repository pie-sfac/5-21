import React, { useRef, useState } from 'react';
import * as S from './Record.modules';
// data
import { FixedMenuCommonList, IntvProList } from '../components/commonConst/FixedMenu';
// Components
import Nav from '../components/Nav/Navigation';
import Header from '../components/Nav/header';
import TabMenu from '../components/TabMenu';
import FixedMenu from '../components/record/FixedMenu';
import Modal from '../components/Modal';
import { PainIntvTemplate, TextTemplate, MediaTemplate, SelectTemplate } from '../components/record/CreateTemplates';
// img
import templateAddIcon from '../assets/icon-template-add.svg';

interface TemplateComponents {
    [key: string]: React.ComponentType<any>;
}

const RecordInterviewNew = () => {
    const titleInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLInputElement>(null);

    const [modal, setModal] = useState<boolean>(false);
    const [isNavOpen, setIsNavOpen] = useState(true);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // tab - active
    const [isActiveTab, setIsActiveTab] = useState<number>(0);
    const TabArr = [
        { id: 0, value: '기본 문항' },
        { id: 1, value: '전문 문항' },
    ];

    const handleTab = (idx: number) => {
        setIsActiveTab(idx);
    };

    // input - value
    const [state, setState] = useState({
        title: '',
        description: '',
    });
    const handleChangeState = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    // input - checked (checked 안 먹힘)
    // const [inputState, setInputState] = useState<InputState>({
    //     optionRadio: true,
    //     optionSwitch: true,
    // });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, type } = e.target;
    //     setInputState((prevInputState) => ({
    //         ...prevInputState,
    //         [name]: type === 'checkbox' ? !prevInputState[name as keyof InputState] : e.target.checked,
    //     }));
    // };

    // switch - toggle
    const [required, setRequired] = useState(true);
    const handleSwitchToggle = () => {
        setRequired(!required);
    };
    console.log(required);

    // template - remove
    const handleRemoveTemplate = (index: number) => {
        const updatedTemplate = [...template];
        updatedTemplate.splice(index, 1);
        setTemplate(updatedTemplate);
    };

    // save button - submit
    const handleSubmit = () => {
        if (state.title.length < 1) {
            if (titleInput.current) {
                titleInput.current.focus();
            }
            return;
        }
        if (state.description.length < 5) {
            if (contentInput.current) {
                contentInput.current.focus();
            }
            return;
        }
        return setModal(true);
    };

    // template - create
    const [template, setTemplate] = useState<React.ReactNode[]>([]);
    const dataId = useRef<number>(0);

    const TemplateMapping: TemplateComponents = {
        TEXT: TextTemplate,
        MEDIA: MediaTemplate,
        SELECT: SelectTemplate,
        PAIN_INTV: PainIntvTemplate,
    };

    const onCreateTemplate = (type: string, required: boolean, handleSwitchToggle: () => void): React.ReactElement | undefined => {
        const newTemplate = TemplateMapping[type];
        if (newTemplate) {
            const Template = React.createElement(newTemplate, {
                key: dataId.current,
                required,
                handleSwitchToggle,
                onCloseBtnClick: () => handleRemoveTemplate(dataId.current),
            });
            setTemplate([...template, Template]);
            dataId.current += 1;
            return Template;
        }
    };

    return (
        <S.Wrapper>
            <Nav isNavOpen={isNavOpen} />
            <S.RecordWrapper className={isNavOpen ? '' : 'closed'}>
                <Header breadcrumbProps={{ depth01: '기록 관리', depth02: '문진 템플릿 생성', depth03: '' }} toggleNav={toggleNav} />
                <S.interviewNewContent>
                    <S.TitleSection>
                        <S.RecordTitle>문진 템플릿 생성</S.RecordTitle>
                    </S.TitleSection>
                    <S.ContentSection>
                        {/* templates */}
                        <S.CreateTemplateSection>
                            <S.TemplateForm>
                                <S.TemplateHeader>
                                    <S.TemplateHeaderTitle>
                                        <S.TemplateIconBox>
                                            <S.TemplateIcon src={templateAddIcon} />
                                        </S.TemplateIconBox>
                                        <S.TemplateType>문진 템플릿</S.TemplateType>
                                    </S.TemplateHeaderTitle>
                                </S.TemplateHeader>
                                <S.TemplateContent>
                                    <S.InputWrapper>
                                        <S.TemplateTitleLabel>템플릿 제목 *</S.TemplateTitleLabel>
                                        <S.TemplateTitleInput ref={titleInput} name='title' onChange={handleChangeState} type='text' placeholder='템플릿 제목을 적어주세요. (최대 40자)' />
                                    </S.InputWrapper>
                                    <S.InputWrapper>
                                        <S.TemplateTitleLabel>설명</S.TemplateTitleLabel>
                                        <S.TemplateTitleInput ref={contentInput} name='description' onChange={handleChangeState} type='text' placeholder='템플릿 설명을 적어주세요. (최대 90자)' />
                                    </S.InputWrapper>
                                </S.TemplateContent>
                            </S.TemplateForm>

                            <ul>
                                {template.map((item, index: number) => (
                                    <li key={index}>{React.cloneElement(item, { onCloseBtnClick: () => handleRemoveTemplate(index) })}</li>
                                ))}
                            </ul>
                        </S.CreateTemplateSection>

                        {/* fixed menu */}
                        <S.FixedMenuSection>
                            <S.FixedMenu>
                                <S.FixedMenuHeader>
                                    <S.HeaderTitle>문항 선택</S.HeaderTitle>
                                </S.FixedMenuHeader>
                                <S.TabWrapper>
                                    <TabMenu TabArr={TabArr} isActiveTab={isActiveTab} onClick={handleTab} />
                                </S.TabWrapper>
                                {isActiveTab ? (
                                    <S.TabContent>
                                        <S.FixedMenuUl>
                                            {IntvProList.map((item: any) => (
                                                <S.FixedMenuLi key={item.id} onClick={() => onCreateTemplate(item.type, required, handleSwitchToggle)}>
                                                    <FixedMenu title={item.title} desc={item.desc} img={item.img} label={item.label} type={item.type} />
                                                </S.FixedMenuLi>
                                            ))}
                                        </S.FixedMenuUl>
                                    </S.TabContent>
                                ) : (
                                    <S.TabContent>
                                        <S.FixedMenuUl>
                                            {FixedMenuCommonList.map((item: any) => (
                                                <S.FixedMenuLi key={item.id} onClick={() => onCreateTemplate(item.type, required, handleSwitchToggle)}>
                                                    <FixedMenu title={item.title} desc={item.desc} img={item.img} label={item.label} type={item.type} />
                                                </S.FixedMenuLi>
                                            ))}
                                        </S.FixedMenuUl>
                                    </S.TabContent>
                                )}
                                <S.FixedMenuFooter>
                                    <S.SaveBtn onClick={handleSubmit}>저장</S.SaveBtn>
                                </S.FixedMenuFooter>
                            </S.FixedMenu>
                        </S.FixedMenuSection>
                    </S.ContentSection>
                </S.interviewNewContent>
            </S.RecordWrapper>
            {modal && <Modal setModal={setModal} type={'complete'} btnType={'primary'} headerTitle={''} contentTitle={'등록 완료'} contentDesc={'템플릿이 등록되었습니다.'} />}
        </S.Wrapper>
    );
};

export default RecordInterviewNew;
