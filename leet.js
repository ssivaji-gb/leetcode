// 1. Two Sum================

// function twoSum(nums, target) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// let s = [2, 7, 11, 15];
// let t = 9;
// let sum = twoSum(s, t);
// console.log(sum);

// 2. Add Two Numbers===================

// function addTwoNumbers(lone,ltwo){

// let a=lone.reverse().toString().split(",").join("")
// let b=ltwo.reverse().toString().split(",").join("")
// let c= Number(a)+Number(b)
// let rev=String(c).split('').map(Number).reverse()
// return rev
// }
// let l1=[2,4,3]
// let  l2 = [5,6,4]
// console.log(addTwoNumbers(l1,l2))

// 3.strictly-palindromic-number=============

// function isPalindrome (x) {

// let b=x.toString().split("").reverse().join("")
// let c= parseInt(b)
// if(x==c){
//     return true
// }
// return false
// };
// console.log(isPalindrome(12));

// 4. Valid Palindrome===========
// function isAnagram(s, t) {
//   let blooean = false;
//   let a = s.toLowerCase().split("").sort().join("");
//   let b = t.toLowerCase().split("").sort().join("");
//   if (a == b) {
//     blooean = true;
//   }
//   return blooean;
// }
// console.log(isAnagram("sww", "sww"));


// 5.Valid Palindrome
// let isPalindrome = function(s) {
// let et = "";
// let boolean=false
// let a = s.toLowerCase().split("");
// for (let i = 0; i < a.length; i++) {
//   if ((a[i] >= "a" && a[i] <= "z")|| (a[i]>="0"&&a[i]<="9")) {
//     et += a[i];
//   }
// }
// let rev = et.toString().split("").reverse().join("");
// if(et==rev){
// boolean=true
// }
// return boolean
// };
// let a="0P"
// console.log(isPalindrome(a));

// 6.Valid Parentheses===========

// function isValid (s) {
//   let arr = []
//   for( char of s){
//     if(char=="{"||char=="["||char=="("){
//       arr.push(char)
//     }else{
//       let pop=arr.pop()
//       if(char==="}"&& pop=="{") return false
//       if(char==="]"&& pop=="[") return false
//       if(char===")"&& pop==")") return false
//     }
//   }  
//   return arr.length==0
// };

