import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { menu } from '../commonConst/NavConst';

// interface Props {
//   menuLeft: boolean;
//   setMenuLeft: boolean;
// }

const GNBLeft = () => {
  const GNBLeftBack = styled.div`
    height: 50px;
    width: 100%;
    padding-left: 20px;
  `;
  const GNBLeftUl = styled.ul`
    display: flex;
    font-size: 16px;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
  `;

  const GNBLeftLi = styled.li`
    margin-right: 32px;
  `;

  const NavbarLeftLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <GNBLeftBack>
      <GNBLeftUl>
        {menu.map((li) => {
          return (
            <NavbarLeftLink to={li.path}>
              <GNBLeftLi>{li.name}</GNBLeftLi>
            </NavbarLeftLink>
          );
        })}
      </GNBLeftUl>
    </GNBLeftBack>
  );
};

export default GNBLeft;
