// async & await
// clear style of using promise :)

// 1. async (Promise를 간편하게 사용할 수 있다.)
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// async 가 붙은 함수 안에서만 쓸 수 있다.
// await가 끝날때까지 기다려준다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

/**
 * 병렬처리 하는 방법
 * 문제점 : apple을 불러올때까지 banana가 기다릴 필요가 없다.
 */

async function pickFruits2() {
  const applePromise = getApple(); // 바로 실행이 된다.
  const bansnsPromise = getBanana(); // 바로 실행이 된다.
  const apple = await applePromise;
  const banana = await bansnsPromise;
  return `병렬 처리 : ${apple} + ${banana}`;
}

pickFruits2().then(console.log);

// 3. userful Promise APIs (유용한 Promise APIs)
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
