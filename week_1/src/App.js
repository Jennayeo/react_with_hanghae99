// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const styles = { //styles라는 변수 생성
//     border: '1px solid #eee', //라인넣어주기 eee=회색
//     padding: '20px', 
//     display: 'flex',//정렬
//     width: '100vw', //vw=화면배율, 100%쓴다는 뜻
//     maxWidth: '400px', //400이상으로 커지지않는다
//     margin: '30px auto', //위로는 30px, 가로는 auto
//     flexDirection: 'column', //column=세로정렬, row=가로정렬
//   };
//   return (
//     <div className="App">
//         <div style = {styles}>
//         <h1 style={{color: 'green'}}>반갑습니다!</h1>
//         <hr style={{width: '100%'}}/>
//         <p>오늘도 좋은 하루 되세요😍</p>
//         <p style={{textAlign:'left'}}>이름을 입력해주세요:</p> <input type = "text"/>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';

function App() {

  return (
    <div className="App">
      <h1>내 버킷리스트</h1>
      {/* 컴포넌트를 넣어줍니다. */}
      <BucketList/>
    </div>
  );
}

export default App;