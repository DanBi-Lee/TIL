# 웹 게임을 만들며 배우는 React

> 전체 강의 링크 : https://www.inflearn.com/course/web-game-React/dashboard

1. 리액트를 왜 쓰는가

   - 사용자 경험
   - 컴포넌트 재사용
   - 데이터와 화면 일치

2. 리액트 컴포넌트 만들어보기

   - state란?
     - state는 바뀔 여지가 있는 부분
     - state가 바뀌면 자동으로 화면이 바뀐다 (데이터 화면 일치)

3. JSX와 바벨(babel)
   - 기존 컴포넌트는 보기가 좋지 않다. 그래서 나온 것이 JSX
   - 컴포넌트의 장점 : 원하는 만큼 재사용할 수 있다.

> [연습 파일](./lecture/index.html)

## 구구단 만들기

> [구구단 Class형 컴포넌트](./1-MultiplicationGame/GuGuDan-class.html)

### 구구단 만들기 순서

1. 변할 것들을 모두 state로 만들어 준다.
2. 변할 것들의 위치에 state를 놓아준다.
3. input은 주의 (변하는 것을 컨트롤하기 위해)
4. 이벤트 리스너는 함수로 빼주는 것이 좋음 (render안에 있으면 렌더가 계속 실행되기 떄문)

#### Fragment와 기타 팁들

- `<></>`로 감쌀 수 있다. (DOM에서는 감싸는 태그가 없다.)

  - babel이 지원하지 않으면 `<React.Fragment>`사용
  - 과거에는 반드시 `<div>`태그로 감싸줘야 했지만 개선되었다.

- `()` : 그룸 연산자 (우선순위를 높일 때 제외하곤 의미가 없다.)

- class 콤포넌트 안에 함수는 화살표 함수를 써야 한다. (this 떄문)

#### 함수형 setState

- 이전 상태값을 다음 상태값에 반영할 수 있다.
- setState는 비동기다.
- 예전 값으로 새로운 state로 만들 떄는 return해주는 함수를 사용한다.

#### DOM에 직접 접근하고 싶다면?

- ref를 사용할 수 있다.

#### setState할때는 render함수가 다시 실행된다.

### React Hooks 사용하기

> [구구단 함수형 컴포넌트](./1-MultiplicationGame/GuGuDan-function.html)

- 함수형 컴포넌트
  ```jsx
  const GuGuDan = () => {
    return <div>함수형 컴포넌트</div>;
  };
  ```
- 함수형 컴포넌트에서도 state와 ref를 쓸 수 있게 만든 것이 React Hooks

#### Class와 Hooks 비교하기

- Hooks를 사용하면 코드 자체가 짧아진다.
- 최적화 하지 않으면 Hooks가 조금 더 느릴 수 있다. (렌더링 될때마다 함수가 다시 생성되기 때문에)

> memo.
> 리액트에서 못쓰는 html 속성
>
> - `class -> className`
> - `for -> htmlFor`

> memo2.
>
> - setState가 비동기인 이유 : setState가 여러번 일어날 때 모아서 한번에 처리하기 위해

### 웹팩 설치하기

- 웹팩을 쓰는 이유 : 실무에선 컴포넌트가 많음. 이걸 js파일 하나로 만들어줌.
- react할 때 노드를 알아야 한다는 의미 : 자바스크립트 실행기를 알아야 한다.
- 웹팩 설치 순서
  1. 원하는 폴더 위치에서 `npm init`
  2. 리액트, 리액트 돔 패키지 설치 `npm i react react-dom`
  3. 웹팩 패키지 설치 `npm i -D webpack webpack-cli`
     > `-D`의 의미 : 개발할때만 사용하겠다.
  4. `webpack.config.js`파일 생성
  5. `client.jsx`파일 생성
  ```jsx
  const React = require("react");
  const ReactDom = require("react-dom");
  ```
  6. `index.html`파일 생성
  ```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>끝말잇기</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="./dist/app.js"></script>
    </body>
  </html>
  ```
  7. babel 패키지 다운로드
     1. `npm i -D @babel/core` : 바벨의 기본적인 것
     2. `npm i -D @babel/preset-env` 브라우저에 맞게 최신문법을 옛날 문법으로
     3. `npm i -D @babel/preset-react` : jsx 같은거 지원
     4. `npm i -D babel-loader` : 바벨과 웹팩 연결
     5. `npm i -D @babel/plugin-proposal-class-properties`

> memo.
> `jsx`확장자와 `js`확장자의 차이 ? 안에 jsx를 사용하면 확장자를 jsx로 하는 것이 좋다. (안에 jsx문법을 담고 있다는 것을 바로 확인 가능)

#### 모듈 시스템과 웹팩 설정

- 모듈 시스템
  - 장점 : 필요한 것만 불러올 수 있다.
  - 단점 : html에서 인식하는 것은 js파일 하나 (파일을 하나로 합쳐줘야함. 그래서 웹팩이 나옴)

## 끝말잇기
