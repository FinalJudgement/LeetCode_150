var removeDuplicates = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    if (hash[c] === undefined) {
      hash[c] = 1;
    } else if (hash[c] >= 2) {
      nums.splice(i, 1);
      i--;
    } else {
      hash[c]++;
    }
    console.log(hash);
  }
};

var efficient = function (nums) {
  if (nums.length <= 2) return nums.length;

  let writePointer = 2;

  for (let readPointer = 2; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[writePointer - 2]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }
  return writePointer;
};
