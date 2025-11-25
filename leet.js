function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
let s = [2, 7, 11, 15];
let t = 9;
let sum = twoSum(s, t);
console.log(sum);
