const nums = [3, 2, 2, 3];
const val = 3;

let result = solution(nums, val);

console.log(result);

function solution(nums, val) {
  return nums.filter((v) => v !== val);
}
