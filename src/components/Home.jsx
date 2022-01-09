import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <S_App>
      <S_Main>
        <S_CenterWrapper>
          <S_Title>Build amazing magazine</S_Title>
          <S_ButtonWrapper>
            <S_Button>
              <Link to='json_viewer'>JSON VIEWER</Link>
            </S_Button>
            <S_Button>
              <Link to='magazine'>MAGAZINE_TEMP</Link>
            </S_Button>
          </S_ButtonWrapper>
        </S_CenterWrapper>
      </S_Main>
    </S_App>
  );
}

const S_ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: auto;
`;

const S_Button = styled.button`
  border: 2px solid #ffffff;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 800;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  border-radius: 50px;
  background: #cb3837;
  font-size: 1rem;
  cursor: pointer;

  & > a {
    color: #ffffff;
  }
`;
const S_Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 5rem;
  text-align: center;
  color: white;
  line-height: 1.25;
`;

const S_Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-image: linear-gradient(
      270deg,
      rgba(176, 42, 42, 0.16) 0%,
      rgba(176, 42, 42, 0.56) 18.45%,
      rgba(176, 42, 42, 0.8) 49.67%,
      rgba(176, 42, 42, 0.56) 82.52%,
      rgba(176, 42, 42, 0.196364) 99.7%,
      rgba(189, 40, 40, 0) 99.71%,
      rgba(203, 56, 55, 0) 99.72%,
      rgba(203, 56, 55, 0.16) 99.73%
    ),
    url(https://static.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png);
`;

const S_CenterWrapper = styled.div`
  margin: auto;
  max-width: 600px;
`;

const S_App = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
