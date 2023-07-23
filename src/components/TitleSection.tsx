import * as S from './style';
// img
import arrowIcon from '../assets/icon-breadcrumb-arrow.svg';
import settingIcon from '../assets/icon-setting.svg';

const TitleSection = () => {
    return (
        <S.TitleSection>
            <S.breadcrumb>
                <S.breadcrumbItem>
                    <S.StyleLink to='/'>Home</S.StyleLink>
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.breadcrumbArrow src={arrowIcon} alt='icon-breadcrumbArrow' />
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.StyleLink to='/record/templates'>기록 관리</S.StyleLink>
                </S.breadcrumbItem>
            </S.breadcrumb>
            <S.TitleWrapper>
                <S.Title>기록 관리</S.Title>
                <S.SettingBtn>
                    <S.SettingIcon src={settingIcon} alt='icon-setting' />
                </S.SettingBtn>
            </S.TitleWrapper>
        </S.TitleSection>
    );
};

export default TitleSection;
