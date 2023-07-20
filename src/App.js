// import logo from './logo.svg';
// import './App.css';
import './style/main.scss';
import Content from './components/Content';

// 컴포넌트 작업 시 감싸는 부모(App)는 한 개로 구성돼있어야 함
// 컴포넌트 이름 작명시 첫 글자는 대문자
// css 작업은 파일을 따로 만든 후 작업 후 import 구문으로 해당 컴포넌트에 연결해서 사용. 
// scss 파일을 변환처리 하지 않고 import 해도 됨
// 경로 설정 시 현재 작업하고 있는 컴포넌트 파일 기준으로 상대 경로 작성

// 데이터 세팅 / 바인딩(연결)
// 태그 여러 개 만들어야 할 때->반복문으로 작업
//컴포넌트 만들고 연결시키는 것 

/* 
이미지 태그 이미지 사용 
1)
: 퍼블릭에 넣어놓고 쓰는 경우, 
./ <-- 자동으로 public으로 설정됨

*/
function App() {
  return (
    <div className='App'>
      <div id='header'>
        <div className='center'>
          상단영역입니다.
        </div>
      </div>
      <Content></Content>
      <img src="./img/bn_01.jpg"/>
      <img src="./img/bn_02.jpg"/>
    </div>
  );
}

export default App;
