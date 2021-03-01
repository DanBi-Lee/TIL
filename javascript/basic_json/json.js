// JSON
// Javascript Object Notation

// 1. Object to JSOn
// stringify(object)
const object = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};
let json = JSON.stringify(object);
json = JSON.stringify(object, ["name"]); // 원하는 목록만 뽑을 수 있다.

json = JSON.stringify(object, (key, value) => {
  // 세밀한 통제를 원할 때
  return key === "name" ? "ellie" : value;
});

console.log(json);

console.clear();
// 2. JSON to Object
// parse(json)

json = JSON.stringify(object);
const obj = JSON.parse(json, (key, value) => {
  console.log(key, value);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
object.jump();
// obj.jump(); 주의 : 함수는 json화 될 수 없음.

console.log(object.birthDate.getDate());
// json으로 만든 데이터는 string이 되었다..
// 이걸 다시 데이터를 받아오고 싶을때, reviver을 사용할 수 있는 것이다.
console.log(obj.birthDate.getDate());
