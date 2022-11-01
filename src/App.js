import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SbRotation from './component/SbRotation';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className='nav-bar'>
      <a className='nav-logo'>
          <Link to="/">
            <img id="logo-header" src='RABC-logo.png'/>
          </Link>
        </a>
{/*  */}
        <a className='nav-mid'>
          <span>문제</span>
          <span>대회</span>
          <span>랭킹</span>
          <span>게시판</span>
          <span><Link to="/homepage" className='link'>홈페이지 소개</Link></span>
          <span>Q&A</span>
          <span>설정</span>
          <span>🔍</span>
        </a>
        <a className='nav-login'>
          <span>로그인</span>
          <span>|</span>
          <span>회원가입</span>
        </a>        
      </div>
      <hr></hr>

      <div className='explanation'>
        <div className='e1'>
          Recommending Algorithm Beginner Consulting
        </div>
        <div className='e2'>
          <a>코딩 비기너들</a>을 위한 알고리즘 추천 컨설팅 웹
        </div>
        <div className='e3'>
          개발자님의 실력을 테스트 하고 <br/>
          맞춤 문제를 풀어나가며 성장하세요.
          <br/>비기너 개발자님들의 미친 성장을 기도합니다.
        </div>
      </div>

      <div className='experience'>
      설문조사를 시작해 주세요!!
      </div>

      <SbRotation />

      <hr/>
      <div className='rabcex'>
        <img id="temporary004" src='temporary-004.png'/>
      </div>
      <hr/>

      <div className='endex'>
        2022 Recommending Algorithm Beginner Consulting.
        <br/>공동대표자명 : 길상현 | 이민주
        <br/>전화번호 : 010-9886-1315 | 010-7471-0758
        <br/>이메일 : rlftkdgus123@gmail.com
        <br/>출처 : ~~~~~~~~~~~~
        <br/>
      </div>
    </div>
  );
}

export default App;
