import React from 'react';
import styled from "styled-components";

export default function Find (){
       
    

    return (
        <>
        <Header>
            <Pointer></Pointer>
            <HeaderText>아이디 찾기 / 비밀번호 찾기</HeaderText>
        </Header>
        </>
    )


   
    
}

export const Header = styled.header`
display: flex;
width: 1920px;
padding: 22.5px 30px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 1.875px;

border-bottom: 1.875px solid var(--border-line-line-200, #E7E7E7);
background: #FFF;
    
    
    `

export const HeaderText = styled.div`
color: var(--text-text-900, #1D1D1D);
/* Pretendard/PT_Body1_regular_16 */
font-family: Pretendard;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 23.04px */
`

export const Pointer = styled.div`
`