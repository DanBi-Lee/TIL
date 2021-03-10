# 배열 개념과 APIs 총정리

- 강좌 링크 : [배열 제대로 알고 쓰자. 자바스크립트 배열 개념과 APIs 총정리](https://youtu.be/yOdAVDuHUKQ)

---

## 자료 구조

자료구조 : 프로그래밍 언어에서 비슷한 타입의 데이터를 묶어서 보관하는 것

- 특징
  - 방식/형식에 따라 다양한 타입이 있다.
  - 어떤 문제를 해결하느냐에 따라 자료구조를 선택한다.
    - ex. 검색, 삽입, 정렬, 삭제
  - 자료구조 중 하나가 배열이다.
  - 대부분 프로그래밍 언어들은 동일한 타입만 담을 수 있는데 JS는 동적타입언어라서 섞어서 담을 수 있다. 하지만 동일한 타입을 담는 것이 좋다.
- 객체와의 차이점
  - 객체는 서로 연관된 특징과 행동을 묶어 놓는 것을 의미한다.

---

## 배열

1. Declaration (선언)

   ```javascript
   const arr1 = new Array();
   const arr2 = [1, 2];
   ```

2. Index position

   ```javascript
   const fruits = ["🍎", "🍌"];
   console.log(fruits);
   console.log(fruits[0]);
   ```

3. Looping over an array

   - for

     ```javascript
     for (let i = 0; i < fruits.length; i++) {
       console.log(fruits[i]);
     }
     ```

   - for of

     ```javascript
     for (let fruit of fruits) {
       console.log(fruit);
     }
     ```

   - forEach

     ```javascript
     fruits.forEach(console.log);
     ```

4. Addition, deletion, coppy

   - push : 배열의 뒤에 추가

     ```javascript
     fruits.push("🍓", "🍑");
     ```

   - pop : 배열의 마지막 아이템 삭제

     ```javascript
     fruits.pop();
     ```

   - unshift : 배열의 앞에 추가

     ```javascript
     fruits.unshift("🍓", "🍋");
     ```

   - shift : 배열의 첫번째 아이템 삭제

     ```javascript
     fruits.shift();
     ```

   > Note.
   >
   > `shift`, `unshift`는 `pop`, `push`보다 느리다.
   >
   > 이유 : pop, push는 index가 유지되지만, shift, unshift는 index가 변하기 때문

   - slice : 특정 index의 아이템 삭제

     ```javascript
     fruits.splice(1); // index 1부터 전부
     fruits.splice(1, 1); //index 1부터 하나
     fruits.splice(1, 1 , '🥝', '🍉'); //index 1부터 하나 지우고 그 자리에 추가
     ```

   - 두 개의 배열 합치기

     ```javascript
     const fruits2 = ["🍇", "🥥"];
     const newFuits = fruits.concat(fruits2);
     ```

5. Searching 검색

   - find the index : 앞에서부터 index를 찾음

     ```javascript
     console.log(fruits.indexOf("🥝"));
     console.log(fruits.indexOf("🍎"));
     ```

   - includes : 포함하고 있는지 true, false로 반환

     ```javascript
     console.log(fruits.includes("🥝"));
     console.log(fruits.includes("🍎"));
     ```

   - lastIndexOf : 뒤에서부터 index를 찾음

     ```javascript
     console.log(fruits.lastIndexOf("🍋")); 
     ```

## 숙제

배열이 선언된 곳에서 배열 관련 API코드 읽어보기

