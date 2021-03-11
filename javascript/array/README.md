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

### 숙제

배열이 선언된 곳에서 배열 관련 API코드 읽어보기



## 유용한 10가지 배열 함수들. Array APIs 총정리

1. join

   >  \* Adds all the elements of an array into a string, separated by the specified separator string.
   >
   >    \* @param separator : A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

   ```typescript
   join(separator?: string): string;
   ```

   

2. split

   > \* Split a string into substrings using the specified separator and return them as an array.
   >
   >    \* @param splitter An object that can split a string.
   >
   >    \* @param limit A value used to limit the number of elements returned in the array.

   ```typescript
   split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
   ```

3. reverse

   >    \* Reverses the elements in an array in place.
   >
   >    \* This method mutates the array and returns a reference to the same array.

   ```typescript
   reverse(): T[];
   ```

4. slice

   >   \* Returns a copy of a section of an array.
   >
   >    \* For both start and end, a negative index can be used to indicate an offset from the end of the array.
   >
   >    \* For example, -2 refers to the second to last element of the array.
   >
   >    \* @param start The beginning index of the specified portion of the array.
   >
   >    \* If start is undefined, then the slice begins at index 0.
   >
   >    \* @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
   >
   >    \* If end is undefined, then the slice extends to the end of the array.

   ```typescript
   slice(start?: number, end?: number): T[];
   ```

   - splice와의 차이
     - splice : 배열 자체를 자름
     - slice : 배열에서 특정 부분만 가져올 때

5. find

   >    \* Returns the value of the first element in the array where predicate is true, and undefined
   >
   >    \* otherwise.
   >
   >    \* @param predicate find calls predicate once for each element of the array, in ascending
   >
   >    \* order, until it finds one where predicate returns true. If such an element is found, find
   >
   >    \* immediately returns that element value. Otherwise, find returns undefined.
   >
   >    \* @param thisArg If provided, it will be used as the this value for each invocation of
   >
   >    \* predicate. If it is not provided, undefined is used instead.

   ```typescript
   find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
   
   find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
   ```

6. filter

   >    \* Returns the elements of an array that meet the condition specified in a callback function.
   >
   >    \* @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
   >
   >    \* @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

   ```typescript
   filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
   ```

7. map

   >    \* Calls a defined callback function on each element of an array, and returns an array that contains the results.
   >
   >    \* @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   >
   >    \* @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

   ```typescript
   map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
   ```

8. some

   - 배열의 요소중에서 콜백함수가 리턴 true가 되는 것이 있는지 확인

   >    \* Determines whether the specified callback function returns true for any element of an array.
   >
   >    \* @param predicate A function that accepts up to three arguments. The some method calls
   >
   >    \* the predicate function for each element in the array until the predicate returns a value
   >
   >    \* which is coercible to the Boolean value true, or until the end of the array.
   >
   >    \* @param thisArg An object to which the this keyword can refer in the predicate function.
   >
   >    \* If thisArg is omitted, undefined is used as the this value.

   ```typescript
   some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
   ```

   - 비슷한 메서드 every
     - every는 모든 요소가 조건에 해당되는지 확인한다.

9. reduce : 값 누적

   >    \* Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   >
   >    \* @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   >
   >    \* @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

   ```typescript
   reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    
   reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
   ```

   - initialValue가 없으면 첫번째 인자
   - reduceRight : 순서를 거꾸로 돌면서 더하기

10. sort

    >    \* Sorts an array in place.
    >
    >    \* This method mutates the array and returns a reference to the same array.
    >
    >    \* @param compareFn Function used to determine the order of the elements. It is expected to return
    >
    >    \* a negative value if first argument is less than second argument, zero if they're equal and a positive
    >
    >    \* value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
    >
    > ```typescript
    > [11,2,22,1].sort((a, b) => a - b)
    > ```

    ```typescript
    sort(compareFn?: (a: T, b: T) => number): this;
    ```

    