import { useState } from 'react';
import styled from "styled-components";



export default function Login(){

    const [id,setId] = useState<string>('');
    const [password,setPassword] = useState<string>('');


    
    const onChangeId = (e) => {
        setId(e.target.value)
        console.log(id);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        
    }
    
    const validCheck = () => {
        if(id === 'leg1770@naver.com' && password === '123456ab'){
            console.log('로그인 성공')
        }
        
    }

    return(
        <>
        <Container>

            <Head>Poin T</Head>
            <Middle>
                <Tab>
                    <Tab1>
                        <AdminText>
                        관리자 로그인
                        </AdminText>
                    </Tab1>
                    <Tab2>
                        <EmpText>
                        직원 로그인
                        </EmpText>
                    </Tab2>
                </Tab>
            <Id>
                <IdText>아이디</IdText>
                <IdInput onChange = {onChangeId}></IdInput>

            </Id>
            <Password>
                <PasswordText>비밀번호</PasswordText>
                <PasswordInput onChange = {onChangePassword} ></PasswordInput>
            </Password>
           
        </Middle>

        <Find>
        아이디 찾기 / 비밀번호 찾기
        </Find>
        <End>
            <EndFront>
            <Text>포인티 계정이 없으세요?</Text>
            <Rec></Rec>
            <Sign>회원가입</Sign>
            </EndFront>
            <LoginButton onClick = {validCheck}>
                <LoginText>로그인</LoginText>
            </LoginButton>
        </End>
        </Container>
        </>
    )
    
}



export const Container = styled.body`

display : flex;
flex-direction : column;    


`

export const Head = styled.h1`
color: #2D62EA;
/* Pretendard/PT_Title4_bold_26 */
font-family: Pretendard;
font-size: 3rem;
font-style: normal;
font-weight: 700;


display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Middle = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 45px;



`

export const Id = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`

export const IdText = styled.div`
width: 682.5px;

color: var(--text-text-900, #1D1D1D);
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */
`

export const IdInput = styled.input`
display: flex;
padding: 15px 30.048px;
justify-content: center;
align-items: center;

align-self: stretch;
font-size : 1.1rem;
border-radius: 7.5px;
border: 1.875px solid var(--border-line-line-300, #CFCFCF);
`

export const Password = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`

export const PasswordText = styled.div`
width: 682.25px;

color: var(--text-text-900, #1D1D1D);
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */
`
export const PasswordInput = styled.input.attrs({
    type : 'password'
})`
display: flex;
padding: 15px 30.048px;
justify-content: center;
align-items: center;
align-self: stretch;
font-size : 1.1rem;
border-radius: 7.5px;
border: 1.875px solid var(--border-line-line-300, #CFCFCF);
`

export const Find = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 63.75px;
align-self: stretch;
color: var(--text-text-700, #505050);
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */

margin-right : 400px;

&:hover{  
    color: var(--primary-primary-300, #6691FF);
  }



`

export const Tab = styled.div`
display: inline-flex;
align-items: center;
justify-content : center;
align-self: stretch;
margin-right : 350px;

`

export const Tab1 = styled.span`
display: flex;
padding: 15px 22.5px;
justify-content: center;
align-items: center;
gap: 18.75px;


&:hover{  
    border-bottom: 3.75px solid var(--primary-primary-300, #6691FF);
  }


`
export const AdminText = styled.span`

&:hover{  
    color: var(--primary-primary-300, #6691FF);
  }

text-align: center;
/* Pretendard/PT_Body2_bold_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 700;
line-height: 270%; /* 20.16px */
`
export const Tab2 = styled.span`
display: flex;
padding: 15px 22.5px;
justify-content: center;
align-items: center;
gap: 18.75px;
&:hover{  
    border-bottom: 3.75px solid var(--primary-primary-300, #6691FF);
  }
`

export const EmpText = styled.span`

text-align: center;
/* Pretendard/PT_Body2_bold_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 700;
line-height: 270%; /* 20.16px */

&:hover{  
    color: var(--primary-primary-300, #6691FF);
  }
`

export const End = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
margin-top : 90px;
margin-bottom : 100px;
`

export const EndFront = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
`
export const Rec = styled.div`
width: 1.875px;
height: 18.75px;
background: var(--text-text-700, #505050);
`

export const Text = styled.span`
color: var(--text-text-700, #505050);
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */
`

export const LoginButton = styled.button`
display: flex;
width: 682.25px;
height : 70px;
justify-content: center;
align-items: center;
gap: 18.75px;
border-radius: 7.5px;
background: var(--bg-bg-100, #F4F4F4);

&:hover{ 
    background-color : var(--primary-primary-300, #6691FF)
    
  }

`

export const LoginText = styled.span`
/* Pretendard/PT_Body1_regular_16 */
font-family: Pretendard;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 23.04px */

`

export const Sign = styled.span`
color: var(--text-text-700, #505050);
/* Pretendard/PT_Body4_regular_14 */
font-family: Pretendard;
font-size: 26.25px;
font-style: normal;
font-weight: 400;
line-height: 270%; /* 20.16px */
&:hover{  
    color: var(--primary-primary-300, #6691FF);
  }
`