import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    cursor: pointer;

    min-width: 62px;
    height: 27px;
    padding: 5px 17px;
    margin: 0 4px;
    border-radius: 62px;
    background: #d9d9d9;

    color: #000;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    &.active {
        background: #000;
        color: #fff;
    }
`;
