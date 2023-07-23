import * as S from './style';
// img
import arrowIcon from '../assets/icon-breadcrumb-arrow.svg';
import settingIcon from '../assets/icon-setting.svg';

interface Title {
    depth01?: string | boolean;
    depth02?: string | boolean;
    depth03?: string | boolean;
}

const TitleSection = ({ depth01, depth02, depth03 }: Title) => {
    const lastDepth = depth03 || depth02 || depth01;

    return (
        <S.TitleSection>
            <S.breadcrumb>
                <S.breadcrumbItem>
                    <S.StyleLink to='/'>Home</S.StyleLink>
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.breadcrumbArrow className={depth01 !== '' ? 'show' : ''} src={arrowIcon} alt='icon-breadcrumbArrow' />
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.StyleLink to='/record'>{depth01}</S.StyleLink>
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.breadcrumbArrow className={depth02 !== '' ? 'show' : ''} src={arrowIcon} alt='icon-breadcrumbArrow' />
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.StyleLink to='/record'>{depth02}</S.StyleLink>
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.breadcrumbArrow className={depth03 !== '' ? 'show' : ''} src={arrowIcon} alt='icon-breadcrumbArrow' />
                </S.breadcrumbItem>
                <S.breadcrumbItem>
                    <S.StyleLink to='/record'>{depth03}</S.StyleLink>
                </S.breadcrumbItem>
            </S.breadcrumb>
            <S.TitleWrapper>
                <S.Title>{lastDepth}</S.Title>
                <S.SettingBtn>
                    <S.SettingIcon src={settingIcon} alt='icon-setting' />
                </S.SettingBtn>
            </S.TitleWrapper>
        </S.TitleSection>
    );
};

export default TitleSection;
