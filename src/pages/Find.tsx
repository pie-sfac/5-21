import React, { useState } from 'react';
import styled from "styled-components";
import Logosrc from '../assets/back.svg'
import Button from '../components/Button';
export default function Find (){
       
    const [auth,setAuth] = useState(false);

    const ButtonChange = ()=>{
        setAuth(true);
    }

    const VeriButton = () => {
        if (auth === true){
            return '재전송'
        }

        else {
            return '인증번호 받기'
        }

    }

    const Block = () => {
        if(auth){
            return (
                <ConfirmContent>
            <PhoneNumber></PhoneNumber>
            <Recieve>인증번호 확인</Recieve>
            </ConfirmContent>
            )
        }

        else return (<></>)

    }

    return (
        <>
        <Header>
      
            <HeaderText>
                <BackIcon src = {Logosrc}></BackIcon>아이디 찾기 / 비밀번호 찾기
                </HeaderText>
        </Header>
        <Middle>
            <MiddleHeader>연락처 인증</MiddleHeader>
            <MiddleName>
                <Name>이름</Name>
                <NameContent></NameContent>
                <NumberText>연락처</NumberText>
            </MiddleName>    
                <NumberContent>
                    <PhoneNumber></PhoneNumber>
                    <Recieve onClick = {ButtonChange}>{VeriButton()}</Recieve>
                </NumberContent>  
                {Block()}
            </Middle>
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


export const BackIcon = styled.img`
margin-right : 10px;
width: 27px;
height: 27px;
`

export const Middle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
margin-top : 72px;

`

export const MiddleHeader = styled.div`
color: var(--text-text-700, #505050);
text-align: center;
/* Pretendard/PT_Title5_bold_20 */
font-family: Pretendard;
font-size: 37.5px;
font-style: normal;
font-weight: 700;
line-height: 255%; /* 27.2px */
`

export const MiddleName = styled.div`
color: var(--text-text-700, #505050);
text-align: center;
/* Pretendard/PT_Title5_bold_20 */
font-family: Pretendard;
font-size: 37.5px;
font-style: normal;
font-weight: 700;
line-height: 255%; /* 27.2px */
`
export const Name = styled.div`
width: 682.5px;
color: var(--text-text-900, #1D1D1D);
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */
`

export const NameContent = styled.input`
display: flex;
width: 682.5px;
padding: 15px 40px;
justify-content: center;
align-items: center;
gap: 15px;
align-self: stretch;
text-align : center;
border-radius: 7.5px;
border: 1px solid var(--border-line-line-300, #CFCFCF);

`

export const NumberText = styled.div`
width: 682.5px;
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */
`

export const NumberContent = styled.div`
width: 682.5px;
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */

display : flex;
flex-direction : row;

`

export const PhoneNumber = styled.input`
display: flex;
padding: 15px 30px;
justify-content: center;
align-items: center;
gap: 15px;
flex: 1 0 0;
text-align : center;
border-radius: 7.5px;
border: 1px solid var(--border-line-line-300, #CFCFCF);


`

export const Recieve = styled.button`
display: flex;
width: 200px;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 4px;
border: 1px solid var(--border-line-line-300, #CFCFCF);
background: var(--bg-bg-wh, #FFF);
`

export const ConfirmContent = styled.div`
width: 682.5px;
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */

display : flex;
flex-direction : row;


`