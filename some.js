// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// function filterEven(arr) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 0) {
//         filteredArr.push(arr[i]);
//       }
//     }
//     return filteredArr;
//   }
//   console.log(filterEven(arr));

// !
// I
// arr.filterFunction((x) => x % 2 != 0)
// arr.filter((x) => x % 2 != 0)
// // both give the same output on console.log: [ 1, 3, 5, 7, 9, 11 ]

// // II
// arr.filterFunction((x) => x > 5)
// arr.filter((x) => x > 5)
// both give the same output on console.log: [ 6, 7, 8, 9, 10, 11 ]
  
//! Massivdəki bütün nömrələrin cəmini hesablamaq üçün istifadə edə bilərsiniz reduce:
// const numbers = [1, 2, 3, 4, 5];

// function square(arr) {
//   return arr.map((num) => num * num);
// }

// console.log(square(numbers)); // [1, 4, 9, 16, 25]

// !Massivdəki hər bir nömrəni konsola daxil etmək üçün istifadə edə bilərsiniz forEach:
// const numbers = [1, 2, 3, 4, 5];

// function log(arr) {
//   arr.forEach((num) => console.log(num));
// }

// log(numbers); // logs: 
//1
//2
//3
//4
//5


const numbers = [1, 2, 3, 4, 5];

let result = numbers.maxp(function(item){
    return item > 2;
})      
console.log(result);

let result2 = numbers.filter(function(item){
    return item > 2;
})

console.log(result2);