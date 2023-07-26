import { styled } from 'styled-components';

// ============= LinkTab =============

export const TabWrapperDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabSectionDiv = styled.div`
  display: flex;
  width: 75%;
  padding: 0 52px;
`;
export const TabButton = styled.button`
  display: flex;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #999999;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; //14px
  &.active {
    color: #2d62ea;
  }
  &.active::after {
    content: '';
    display: block;
    width: 79px;
    height: 2px;
    background-color: #2d62ea;
    position: absolute;
    top: 17.5%;
    /* left: 50%; */
    /* transform: translateX(-50%); */
  }
`;

// ============= LinkItem =============
export const LinkItemWrapper = styled.div`
  cursor: pointer;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0px 10px 30px 0px #e7e9f2;
  transition: all ease-in-out 0.2s;

  &:hover {
    border: 1px solid #275cf5;
    background: #f9faff;
    box-shadow: 0px 10px 30px 0px #c6cbe3;
  }
`;
export const LinkImg = styled.img`
  height: 190px;
  width: 427px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;
export const LinklTitle = styled.h3`
  padding: 10px 0;
  font-size: 18px;
`;
export const LinkContentDiv = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  font-size: 16px;
`;

export const LinklSpan = styled.span``;
