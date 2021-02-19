import { createStore } from "redux";
import reducer from "./reducers/index.js";
import { logIn, logOut } from "./actions/user.js";
import { addPost } from "./actions/post.js";

// state
const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있다.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1st", store.getState());

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
