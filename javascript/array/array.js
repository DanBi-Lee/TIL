"use strict";

// Array

// 1. Declaration (선언)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits[0]);

console.clear();
// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(console.log);

// 4. Addition, deletion, coppy
// push : add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
console.clear();
// splice : remove an item by index position
console.log(fruits);
fruits.splice(1);
console.log(fruits);
fruits.splice(1, 1, "🥝", "🍉");

// combine two arrays
const fruits2 = ["🍇", "🥥"];
const newFuits = fruits.concat(fruits2);
console.log(newFuits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🥝"));
console.log(fruits.indexOf("🍎"));

// includes
console.log(fruits.includes("🥝"));
console.log(fruits.includes("🍎"));

// lastIndexOf
console.clear();
fruits.push("🍋");
console.log(fruits);
console.log(fruits.lastIndexOf("🍋")); // 뒤에서부터 찾음
