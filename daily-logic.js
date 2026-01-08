// array=========

// let arr = [1, [2, [3, [4, 5]], 6], 7];

// let a=[]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         console.log(arr[i],arr[j]);

//     }
// }
// // console.log(a);

// Count Even Numbers:
// Count how many even numbers are in [1, 2, 3, 4, 5, 6].

// let num = [1, 2, 3, 4, 5, 6]
// let count=0
// for(let i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         count++

//     }
// }
// console.log(count);

// Concatenate Array Elements into a String:Loop through ["I", "love", "JS"]
//  and combine them into one string: "I love JS".

// let str = ["I", "love", "JS"]
// let madify=str.join(" ")
// console.log(madify);

// Reverse Words:
// Given "hello world", use loops to reverse each word individually → "olleh dlrow".

// let str = "hello world"
// let madify =str.split(" ")

// let et=""
// for(let x of madify){
//     let a =x.split("").reverse().join("")
//     et+=a
//     et+=" "
// }

// console.log(et);

// Find Longest Word:
// Loop through ["apple", "banana", "kiwi", "watermelon"] and find the longest word.

// let str = ["apple", "banana","dfghjkljhgfd", "kiwi", "watermelon"];
// let find = "";
// let a = 0;
// for (let x of str) {
//   if (x.length > find.length) {
//     find = x;
//     a++;
//   }
// }
// console.log(a);

// console.log(find);

// Find the Maximum Value:
// Loop through [10, 3, 7, 20, 15] and find the largest number.

// let arr = [10, 3, 7, 20, 15];
// let largest = 0;
// for (let x of arr) {
//   if (x > largest) {
//     largest = x;
//   }
// }
// console.log(largest);


// Sum of Elements:
// Use a loop to calculate the sum of all numbers in the array [1, 2, 3, 4, 5].

// let arr=[1, 2, 3, 4, 5]
// let sum =0
// for(let x of arr){
//     sum+=x
// }
// console.log(sum);


// 🧩 STRING LOOP PRACTICE

// Count Characters:
// Write a loop to count how many characters are in the string "hello world" without using .length.

// let str ="hello world"
// let count =0
// let jon=str.split(" ").join("")
// for(let x of jon){
//     count++
// } 
// console.log(count);
