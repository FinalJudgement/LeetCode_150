const numbers = [2, 7, 11, 15];
const target = 9;

console.log(solution(numbers, target));

function solution(nums, tar) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let sum = nums[l] + nums[r];
    console.log(l, r);
    if (sum === tar) {
      return [l + 1, r + 1];
    }

    if (sum <= tar) {
      l++;
    } else {
      r--;
    }
  }
  return [2];
}
