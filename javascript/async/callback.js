"use strict";

// JavaScript is synchronous. (자바스크립트는 동기적이다.)
// Execute the code block in order after hoisting. (호이스팅 도니 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나씩 동기적으로 실행된다.)
// hoisting : var, function declaration이 제일 위로 올라가는 것.

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

// Synchrounous callback (동기 콜백)
function pringImmediately(print) {
  print();
}
pringImmediately(() => console.log("hello"));

// Asynchronous callback (비동기 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

/**
 * 1. id, pass
 * 2. login
 * 3. roles
 * 4. 사용자 정보 출력
 */

const userStorage = new UserStorage();

const id = prompt("enter your id");
const password = prompt("enter your passwordd");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (info) => {
        console.log(`당신은 ${info.name}이고, ${info.role}입니다.`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
