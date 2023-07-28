import { useState } from 'react';
import * as S from './Record.modules';
// Components
import TitleSection from '../components/TitleSection';
import TabMenu from '../components/TabMenu';
import FixedMenu from '../components/record/FixedMenu';
//img
import templateAddIcon from '../assets/icon-template-add.svg';
import templateToggleIcon from '../assets/icon-toggle-arrow.svg';
//data
import { FixedMenuCommonList, FixedMenuProList } from '../components/commonConst/FixedMenu';

interface TabItem {
    id: number;
    value: string;
    content: string;
}

const RecordInterviewNew = () => {
    const [isActiveTab, setIsActiveTab] = useState<number>(0);

    const TabArr: TabItem[] = [
        { id: 0, value: '기본 문항', content: 'Tab menu 0' },
        { id: 1, value: '전문 문항', content: 'Tab menu 1' },
    ];

    const handleTab = (idx: number) => {
        setIsActiveTab(idx);
    };
    return (
        <S.NewWrapper>
            <S.NewContent>
                <TitleSection depth01={'기록 관리'} depth02={'문진 템플릿 생성'} depth03={''} />
                <S.Content>
                    <S.FormTemplate>
                        <S.TemplateHeader>
                            <S.TemplateHeaderTitle>
                                <S.TemplateIconBox>
                                    <S.TemplateIcon src={templateAddIcon} alt='icon-add-template' />
                                </S.TemplateIconBox>
                                <S.TemplateType>문진 템플릿</S.TemplateType>
                            </S.TemplateHeaderTitle>
                            <S.ToggleArrowBtn>
                                <S.ToggleArrowIcon src={templateToggleIcon} alt='icon-toggle-arrow' />
                            </S.ToggleArrowBtn>
                        </S.TemplateHeader>
                        <S.TemplateContent>
                            <S.InputWrapper>
                                <S.TemplateTitleLabel>템플릿 제목</S.TemplateTitleLabel>
                                <S.TemplateTitleInput type={'text'} placeholder={'탬플릿 제목을 적어주세요. (최대40자)'} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.TemplateDescLabel>설명</S.TemplateDescLabel>
                                <S.TemplateDescInput type={'text'} placeholder={'템플릿 설명을 적어주세요. (최대 50자)'} />
                            </S.InputWrapper>
                        </S.TemplateContent>
                    </S.FormTemplate>
                </S.Content>
            </S.NewContent>

            {/* aside : Fixed Menu */}
            <S.FixedMenu>
                <S.FixedMenuHeader>
                    <S.HeaderTitle>문항 선택</S.HeaderTitle>
                </S.FixedMenuHeader>
                <TabMenu TabArr={TabArr} isActiveTab={isActiveTab} onClick={handleTab} />

                {isActiveTab === 0 && (
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
                {isActiveTab === 1 && (
                    <S.TabContent>
                        <S.FixedMenuUl>
                            {FixedMenuProList.map((item: any) => (
                                <S.FixedMenuLi key={item.id}>
                                    <FixedMenu title={item.title} desc={item.desc} img={item.img} label={item.label} type={item.type} />
                                </S.FixedMenuLi>
                            ))}
                        </S.FixedMenuUl>
                    </S.TabContent>
                )}
            </S.FixedMenu>
        </S.NewWrapper>
    );
};

export default RecordInterviewNew;
