"use strict";

// Promise is a JavaScript object for asynchronous operation. (프로미스는 비동기 작업을 위한 자바스크립트 객체이다.)
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically (프로미스를 만드는 순간 실행된다.)
// 따라서,  만약 네트워크 요청을 사용자가 요구 했을 때만 해야하는 경우라면, 이런 식으로 작성하면 안 된다.

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network!"));
  }, 2000);
});

// 2. Consumers : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      })
  )
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, rejcet) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// 한가지만 인자를 받아서 그대로 전달하는 경우에는 생략 가능
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// 에러를 대체하고 싶을 때는 중간에 catch에서 다른 것으로 return해줄 수 있다.
