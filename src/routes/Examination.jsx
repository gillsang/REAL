import { Link } from "react-router-dom";

export default function Examination() {
  return (
    <main>
        <div className='nav-bar'>
        <a className='nav-logo'>
          <Link to="/">
            <img id="logo-header" src='RABC-logo.png'/>
          </Link>
        </a>

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
          설문조사 아직 안만듬
        </div>
      </div>
      </main>
  );
}