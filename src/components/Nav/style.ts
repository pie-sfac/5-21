import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// ============= Link =============
export const StyleLink = styled(Link)`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-decoration: none;
    color: #1d1d1d;
    &.active {
        color: #2d62ea;
    }
`;

// ============= Navigation =============
export const Nav = styled.nav`
    width: 260px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
export const NavHeader = styled.header`
    width: 100%;
    height: 50px;
    position: relative;
    padding-left: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &::after {
        content: '';
        display: block;
        width: 216px;
        height: 1px;
        background-color: #f2f5ff;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;
export const NavLogo = styled.img``;

export const NavMenuWrapper = styled.div`
    width: 100%;
    height: calc(100% - 130px);
`;
export const NavUl = styled.ul``;
export const NavItem = styled.li`
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 22px;
    position: relative;

    &:hover::before {
        content: '';
        display: block;
        width: 228px;
        height: 40px;
        background-color: #f5f8ff;
        border-radius: 6px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    &:hover span {
        color: #2d62ea;
    }
    &.active::before {
        content: '';
        display: block;
        width: 228px;
        height: 40px;
        background-color: #f5f8ff;
        border-radius: 6px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    &.active span {
        color: #2d62ea;
    }
`;

export const NavIconBox = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const NavIconImg = styled.img``;
export const NavMenu = styled.span`
    color: #888888;
`;

export const NavFooter = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fafbff;
    padding-left: 22px;
    border-top: 1px solid #f2f5ff;

    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const NavLogoutBtn = styled.button`
    width: 36px;
    height: 36px;
    padding: 6px;
    border-radius: 6px;
    background: #e1eaff;
    margin-right: 8px;
`;
export const NavLogoutIcon = styled.img`
    vertical-align: middle;
`;
export const NavLogout = styled.span`
    color: #2d62ea;
    font-weight: 600;
`;
// ============= Header =============
export const Header = styled.header`
    width: 100%;
    height: 50px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafbff;
`;
export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;
export const WidthToggleBtn = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 6px;
    margin-right: 16px;
    border: 1px solid #ededed;
    background-color: #fff;
`;
export const ToggleBtnIcon = styled.img`
    vertical-align: middle;
`;

export const breadcrumb = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;

    & > li:first-of-type > a {
        color: #2d62ea;
        font-weight: 700;
    }
    & > li:first-of-type {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
`;
export const breadcrumbItem = styled.li`
    margin-right: 4px;

    & > a {
        display: block;
        font-size: 12px;
        font-weight: 400;
        color: #444;
    }
`;
export const breadcrumbIcon = styled.img`
    margin-right: 2px;
`;
export const breadcrumbArrow = styled.img`
    opacity: 0;
    vertical-align: middle;
    &.show {
        opacity: 1;
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const FuncBtnWrapper = styled.div`
    padding-right: 4px;
`;
export const FuncBtn = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: 1px solid #eee;
    background: #fff;
    margin-right: 8px;
`;
export const FuncHomeIcon = styled.img`
    vertical-align: middle;
`;
export const FuncAlarmIcon = styled.img`
    vertical-align: middle;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    position: relative;

    &::before {
        content: '';
        display: block;
        width: 1px;
        height: 24px;
        background-color: #ddd;
        position: absolute;
        left: 0px;
    }
`;
export const UserProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 8px;
`;
export const ProfileImgBox = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 6px;
    margin-right: 8px;
    overflow: hidden;
    background-color: #ecefff;
`;
export const ProfileImg = styled.img``;
export const UserName = styled.span`
    font-weight: 600;
    color: #444;
`;
export const PlanLabel = styled.div`
    padding: 0px 12px;
    height: 32px;
    color: #2d62ea;
    line-height: 32px;
    text-align: center;
    border-radius: 6px;
    background-color: #ecefff;
`;
