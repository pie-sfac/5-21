import * as S from './style';

// img
import widthToggleIcon from '../../assets/icon-menuWidth-toggle.svg';
import arrowIcon from '../../assets/icon-breadcrumb-arrow.svg';
import breadcrumbHomeIcon from '../../assets/icon-breadcrumb-home.svg';
import HomeBtnIcon from '../../assets/icon-functionBtn-home.svg';
import AlarmBtnIcon from '../../assets/icon-functionBtn-alarm.svg';
import ProfileImg from '../../assets/img-profile.svg';

interface breadcrumbProps {
    depth01?: string | undefined;
    depth02?: string | undefined;
    depth03?: string | undefined;
}
interface HeaderProps {
    breadcrumbProps: breadcrumbProps;
    toggleNav: () => void;
}

<<<<<<< HEAD
const Header = ({ breadcrumbProps, toggleNav }: HeaderProps) => {
    const { depth01, depth02, depth03 } = breadcrumbProps;

    return (
        <S.Header>
            <S.HeaderLeft>
                <S.WidthToggleBtn onClick={toggleNav}>
                    <S.ToggleBtnIcon src={widthToggleIcon} alt='icon-toggle' />
                </S.WidthToggleBtn>
                <S.breadcrumb>
                    <S.breadcrumbItem>
                        <S.breadcrumbIcon src={breadcrumbHomeIcon} />
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
            </S.HeaderLeft>
            <S.HeaderRight>
                <S.FuncBtnWrapper>
                    <S.FuncBtn>
                        <S.FuncHomeIcon src={HomeBtnIcon} />
                    </S.FuncBtn>
                    <S.FuncBtn>
                        <S.FuncAlarmIcon src={AlarmBtnIcon} />
                    </S.FuncBtn>
                </S.FuncBtnWrapper>
                <S.UserInfoWrapper>
                    <S.UserProfile>
                        <S.ProfileImgBox>
                            <S.ProfileImg src={ProfileImg} />
                        </S.ProfileImgBox>
                        <S.UserName>admin</S.UserName>
                    </S.UserProfile>
                    <S.PlanLabel>플랜 이용중</S.PlanLabel>
                </S.UserInfoWrapper>
            </S.HeaderRight>
        </S.Header>
    );
=======
const Header = ({ depth01, depth02, depth03 }: breadcrumbProps) => {
  return (
    <S.Header>
      <S.HeaderLeft>
        <S.WidthToggleBtn>
          <S.ToggleBtnIcon src={widthToggleIcon} alt="icon-toggle" />
        </S.WidthToggleBtn>
        <S.breadcrumb>
          <S.breadcrumbItem>
            <S.breadcrumbIcon src={breadcrumbHomeIcon} />
            <S.StyleLink to="/">Home</S.StyleLink>
          </S.breadcrumbItem>
          <S.breadcrumbItem>
            <S.breadcrumbArrow
              className={depth01 !== '' ? 'show' : ''}
              src={arrowIcon}
              alt="icon-breadcrumbArrow"
            />
          </S.breadcrumbItem>
          <S.breadcrumbItem>
            <S.StyleLink to="/record">{depth01}</S.StyleLink>
          </S.breadcrumbItem>
          <S.breadcrumbItem>
            <S.breadcrumbArrow
              className={depth02 !== '' ? 'show' : ''}
              src={arrowIcon}
              alt="icon-breadcrumbArrow"
            />
          </S.breadcrumbItem>
          <S.breadcrumbItem>
            <S.StyleLink to="/media">{depth02}</S.StyleLink>
          </S.breadcrumbItem>
          <S.breadcrumbItem>
            <S.breadcrumbArrow
              className={depth03 !== '' ? 'show' : ''}
              src={arrowIcon}
              alt="icon-breadcrumbArrow"
            />
          </S.breadcrumbItem>
          <S.breadcrumbItem>
            <S.StyleLink to="/record">{depth03}</S.StyleLink>
          </S.breadcrumbItem>
        </S.breadcrumb>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.FuncBtnWrapper>
          <S.FuncBtn>
            <S.FuncHomeIcon src={HomeBtnIcon} />
          </S.FuncBtn>
          <S.FuncBtn>
            <S.FuncAlarmIcon src={AlarmBtnIcon} />
          </S.FuncBtn>
        </S.FuncBtnWrapper>
        <S.UserInfoWrapper>
          <S.UserProfile>
            <S.ProfileImgBox>
              <S.ProfileImg src={ProfileImg} />
            </S.ProfileImgBox>
            <S.UserName>admin</S.UserName>
          </S.UserProfile>
          <S.PlanLabel>플랜 이용중</S.PlanLabel>
        </S.UserInfoWrapper>
      </S.HeaderRight>
    </S.Header>
  );
>>>>>>> sun
};

export default Header;
