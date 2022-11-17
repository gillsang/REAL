import { Link } from "react-router-dom";

export default function Noticeboard() {
    return (
      <main>
        <div className='nav-bar'>
        <Link to="/">
          <a className='nav-logo'>
            <img id="logo-header" src='RABC-logo.png'/>
          </a>
        </Link>
        
        <a className='nav-mid'>
        <span><a target="_blank" href="https://www.google.com" className='link'>문제</a></span>
          <span><Link to="/competition" className='link'>대회</Link></span>
          <span><Link to='/lanking' className='link'>랭킹</Link></span>
          <span><Link to='/noticeboard' className='link'>게시판</Link></span>
          <span><Link to="/homepage" className='link'>홈페이지 소개</Link></span>
          <span>🔍</span>
        </a>
        <a className='nav-login'>
          <span>RABC</span>
          <span></span>
          <span>ONLINE JUDGE</span>
        </a>       
      </div>
      <hr></hr>
      
      <div>
        한림대 게시판
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
      </main>
      // 
    );
}