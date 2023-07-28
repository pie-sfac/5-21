import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './style';
//data
import { menu } from '../components/commonConst/NavConst';
//img
import NavLogo from '../assets/Nav-Logo.svg';
import NavLoigoutIcon from '../assets/icon-logout.svg';

const Navigation = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const [hover, setHover] = useState<number[]>([]);

    const linkNavigation = (path: any) => {
        navigation(path);
    };

    useEffect(() => {
        const currentMenu = menu.filter((item) => {
            return item.path == location.pathname;
        });
        const menuActiveStatus = [0, 0, 0, 0, 0, 0, 0];
        menuActiveStatus[currentMenu[0].id] = 1;
        setHover(menuActiveStatus);
    }, [location]);

    return (
        <S.Nav>
            <S.NavHeader>
                <S.NavLogo src={NavLogo} alt='logo' />
            </S.NavHeader>
            <S.NavMenuWrapper>
                <S.NavUl>
                    {menu.map((item) => (
                        <S.NavItem
                            key={item.id}
                            onClick={() => {
                                linkNavigation(item.path);
                            }}
                            className={hover[item.id] ? 'active' : ''}
                        >
                            <S.NavIconBox>
                                <S.NavIconImg src={hover[item.id] ? item.iconHover : item.iconDefault} />
                            </S.NavIconBox>
                            <S.NavMenu>{item.name}</S.NavMenu>
                        </S.NavItem>
                    ))}
                </S.NavUl>
            </S.NavMenuWrapper>
            <S.NavFooter>
                <S.NavLogoutBtn>
                    <S.NavLogoutIcon src={NavLoigoutIcon} />
                </S.NavLogoutBtn>
                <S.NavLogout>Logout</S.NavLogout>
            </S.NavFooter>
        </S.Nav>
    );
    // const navigation = useNavigate();
    // const [hoverIcon, setHoverIcon] = useState<string | null>(null);
    // const [isActiveItem, setIsActiveItem] = useState<string | null>(null);

    // const handleMouseEnter = (iconSrc: any) => {
    //     setHoverIcon(iconSrc);
    // };
    // const handleMouseLeave = () => {
    //     setHoverIcon(null);
    // };
    // const linkNavigation = (path: any) => {
    //     navigation(path);
    //     setIsActiveItem(path);
    // };

    // return (
    //     <S.Nav>
    //         <S.NavHeader>
    //             <S.NavLogo src={NavLogo} alt='logo' />
    //         </S.NavHeader>
    //         <S.NavMenuWrapper>
    //             <S.NavUl>
    //                 {menu.map((item) => (
    //                     <S.NavItem
    //                         key={item.id}
    //                         onClick={() => linkNavigation(item.path)}
    //                         onMouseEnter={() => handleMouseEnter(item.iconHover)}
    //                         onMouseLeave={handleMouseLeave}
    //                         className={isActiveItem === item.path ? 'active' : ''}
    //                     >
    //                         <S.NavIconBox>
    //                             <S.NavIconImg src={hoverIcon === item.iconHover ? item.iconHover : item.iconDefault} />
    //                         </S.NavIconBox>
    //                         <S.NavMenu>{item.name}</S.NavMenu>
    //                     </S.NavItem>
    //                 ))}
    //             </S.NavUl>
    //         </S.NavMenuWrapper>
    //         <S.NavFooter>
    //             <S.NavLogoutBtn>
    //                 <S.NavLogoutIcon src={NavLoigoutIcon} />
    //             </S.NavLogoutBtn>
    //             <S.NavLogout>Logout</S.NavLogout>
    //         </S.NavFooter>
    //     </S.Nav>
    // );
};

export default Navigation;
