import { useState } from 'react';
import * as S from './Record.modules';
// data
import { FixedMenuCommonList, FixedMenuProList } from '../components/commonConst/FixedMenu';
// Components
import Nav from '../components/Nav/Navigation';
import Header from '../components/Nav/header';
import TabMenu from '../components/TabMenu';
import FixedMenu from '../components/record/FixedMenu';
import TextTemplate from '../components/record/TemplateText';
import MediaTemplate from '../components/record/TemplateMedia';
import OptionalTemplate from '../components/record/TemplateOptional';
// img
import templateAddIcon from '../assets/icon-template-add.svg';
import templateClosedToggleIcon from '../assets/icon-template-toggle-arrow.svg';

const RecordInterviewNew = () => {
    const [isActiveTab, setIsActiveTab] = useState<number>(0);

    const TabArr = [
        { id: 0, value: '기본 문항' },
        { id: 1, value: '전문 문항' },
    ];

    const handleTab = (idx: number) => {
        setIsActiveTab(idx);
    };

    return (
        <S.Wrapper>
            {/* <Nav /> */}
            <S.RecordWrapper>
                <Header depth01={'기록 관리'} depth02={'문진 템플릿 생성'} depth03={''} />
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
                                        <S.TemplateType>TemplateType</S.TemplateType>
                                    </S.TemplateHeaderTitle>
                                    <S.ToggleArrowBtn>
                                        <S.ToggleArrowIcon src={templateClosedToggleIcon} />
                                    </S.ToggleArrowBtn>
                                </S.TemplateHeader>
                                <S.TemplateContent>
                                    <S.InputWrapper>
                                        <S.TemplateTitleLabel>템플릿 제목 *</S.TemplateTitleLabel>
                                        <S.TemplateTitleInput type='text' placeholder='템플릿 제목을 적어주세요. (최대 40자)' />
                                    </S.InputWrapper>
                                    <S.InputWrapper>
                                        <S.TemplateTitleLabel>설명</S.TemplateTitleLabel>
                                        <S.TemplateTitleInput type='text' placeholder='템플릿 설명을 적어주세요. (최대 90자)' />
                                    </S.InputWrapper>
                                </S.TemplateContent>
                            </S.TemplateForm>
                            <TextTemplate />
                            <MediaTemplate />
                            <OptionalTemplate />
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
                                            {FixedMenuProList.map((item: any) => (
                                                <S.FixedMenuLi key={item.id}>
                                                    <FixedMenu title={item.title} desc={item.desc} img={item.img} label={item.label} type={item.type} />
                                                </S.FixedMenuLi>
                                            ))}
                                        </S.FixedMenuUl>
                                    </S.TabContent>
                                ) : (
                                    <S.TabContent>
                                        <S.FixedMenuUl>
                                            {FixedMenuCommonList.map((item: any) => (
                                                <S.FixedMenuLi key={item.id}>
                                                    <FixedMenu title={item.title} desc={item.desc} img={item.img} label={item.label} type={item.type} />
                                                </S.FixedMenuLi>
                                            ))}
                                        </S.FixedMenuUl>
                                    </S.TabContent>
                                )}
                                <S.FixedMenuFooter>
                                    <S.SaveBtn>저장</S.SaveBtn>
                                </S.FixedMenuFooter>
                            </S.FixedMenu>
                        </S.FixedMenuSection>
                    </S.ContentSection>
                </S.interviewNewContent>
            </S.RecordWrapper>
        </S.Wrapper>
    );
};

export default RecordInterviewNew;
