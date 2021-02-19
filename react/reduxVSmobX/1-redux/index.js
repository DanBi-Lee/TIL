const { createStore } = require("redux");

//reducer : 사용 이유는 불변성을 위해서
const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    default:
      // 오타날 때 문제가 생기므로.. 넣어주자.
      return prevState;
    // action이 많아지면 case가 늘어난다.
  }
};

// state
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있다.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log(store.getState());

// action creator
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));
console.log(store.getState());
