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

// 4. Valid Anagram===========
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

// 5.Valid Palindrome================
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

// 7.Merge Two Sorted Lists

// function mergeTwoLists(list1, list2) {
//   arr = [];
//   while (list1 !== null) {
//     arr.push(list1.val);
//     list1 = list1.next;
//   }
//   while (list2 !== null) {
//     arr.push(list2.val);
//     list2 = list2.next;
//   }

//   arr.sort((a, b) => a - b);
//   let head = { val: arr[0], next: null };
//   let current = head;
//   for (let i = 0; i < arr.length; i++) {
//     current.next = { val: arr[i], next: null };
//     current = current.next;
//   }
//   return head.next;
// }
//
//method-2
// function mergeTwoLists(list1, list2) {

// let dummy =new ListNode(0);
// let tail=dummy
// while(list1!==null && list2!==null){
//     if(list1.val<=list2.val){
//         tail.next=list1
//         list1=list1.next
//     }else{
//         tail.next=list2
//         list2=list2.next
//     }
//     tail=tail.next

// }
// tail.next=list1!==null? list1:list2;
//  return dummy.next
// };

// 8.Best Time to Buy and Sell Stock
// function maxProfit(price){
//     let small=Infinity
//     let profit=0
//     for (let i = 0; i < price.length; i++) {

//         if(price[i]<small){
//             profit=price[i]
//         }else{
//             if(price[i]-small>profit){
//                 profit=price[i]-small
//             }
//         }
//     }
//     return profit
// }

// 9. Find the Index of the First Occurrence in a String

// function strStr(haystack, needle) {
// if(needle==="")return 0;
// return haystack.indexOf(needle)
// };

// let haystack = "sadbutsad"
// let  needle = "sad"
// console.log(strStr(haystack,needle));

// 10.Invert Binary Tree

// function invertTree(root) {
//     if(root==null) return null;
//     temp=root.left
//     root.left=root.right
//     root.right=temp
// invertTree(root.left)
// invertTree(root.right)

//     return root
// };

// function rotate(nums, k) {

//   for (let i = 1; i <=k; i++) {
//    let a= nums.pop()
//     nums.unshift(a)

//   }
//   console.log(nums);

// return nums
// };

// let nums = [1,2,3,4,5,6,7]
// let  k = 3
// rotate(nums, k);

// 11.//75. Sort Colors

// var sortColors = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//       }
//     }
//   }
//   return nums;
// };

// console.log(sortColors([2,0,2,1,1,0]));

// 12.// 41. First Missing Positive

// var firstMissingPositive = function (nums) {
//   let count = 0;
//   let missF=[]
//   let sort = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sort.length; i++) {
//     if(count !==nums[i]){
//       missF.push(count)
//       count++
//       i--
//     }else{
//       count++
//     }

//     }
//     console.log(missF);

//     }

// let nums = [1, 2, 0];

// firstMissingPositive(nums);

// 66. Plus One------------------------------------------------

// function plusOne(digits){
//     if(digits.at(-1)>8){
//     let nextone = digits.at(-1)+1
//     let index = digits.length-1
//     let str =String(nextone)
//     let sip= str.split("")
//     let num = sip.map(num=>Number(num))
//     digits.splice(index,1,num)
//     digits.flat()

//         return digits.flat()

//     }else{
//          let nextone = digits.at(-1)+1
//     let index = digits.length-1
//   digits.splice(index,1,nextone)
//     return digits.flat()
//     }
// }
// let digits = [1,2,3,9]

// console.log(plusOne(digits));

// 3769. Sort Integers by Binary Reflection

// var sortByReflection = function(nums) {

//   let reflections=nums.map(i=>{
//     let bin=i.toString(2)
//     let res=bin.split("").reverse().join("")
//     return parseInt(res,2)
//   })

//   reflections.sort((a,b)=>a-b)

//   return reflections.map(n=>{
//     let bin=n.toString(2)
//     let res=bin.split("").reverse().join("")
//     return parseInt(res,2)
//   })

// };
// console.log(sortByReflection([8,2]));

// 3731. Find Missing Elements

// var findMissingElements = function(nums) {
//  let arr=[]

//     nums.sort((a,b)=>a-b)
//     let count=nums[0]
//     for (let i = 0; i < nums.length; i++) {
//       if(count!==nums[i]){
//         arr.push(count)
//           count++
//         i--
//       }else{
//         count++
//       }

//     }

//     return arr

// };

// let nums=[1,4,2,5]
// console.log(findMissingElements(nums));

// 35. Search Insert Position
var searchInsert = function (nums, target) {
  let find = nums.findIndex((i) => i == target);
  if (find !== -1) {
    return find;
  } else if (find == -1) {
    let arr = nums;
    arr.push(target);
    arr.sort((a, b) => a - b);
    let final = arr.findIndex((i) => i == target);
    return final;
  }
};
let nums = [1, 3, 5, 6];
let target = 4;
console.log(searchInsert(nums, target));
