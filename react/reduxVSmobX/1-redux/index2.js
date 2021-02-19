const { createStore } = require("redux");

//reducer : 사용 이유는 불변성을 위해서
const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      // 오타날 때 문제가 생기므로.. 넣어주자.
      return prevState;
    // action이 많아지면 case가 늘어난다.
  }
};

// state
const initialState = {
  user: null,
  posts: [],
};

// 헷갈린다면 nextState를 작성해보기
// const nextState = {
//   ...initialState,
//   posts: [{ id: 1 }, {}],
// };

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있다.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1st", store.getState());

// action creator
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요, 리덕스",
  })
);

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두번째 리덕스",
  })
);

console.log("3rd", store.getState());

store.dispatch(logOut());
console.log("4th", store.getState());
