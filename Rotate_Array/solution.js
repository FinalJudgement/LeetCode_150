const nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);

// Me and chill submission
var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  return nums.splice(nums.length, 0, ...nums.splice(0, nums.length - k));
};

// anonymous submission
function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    res[(i + k) % n] = nums[i];
    console.log(i, " + ", k, " % ", n, " = ", (i + k) % n);
  }
  for (let i = 0; i < n; i++) {
    nums[i] = res[i];
  }
}
