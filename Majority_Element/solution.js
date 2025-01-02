// original
var majorityElement = function (nums) {
  let hash = {};
  let highestCount = 0;
  let majorityElement = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }

    if (hash[num] > highestCount) {
      highestCount = hash[num];
      majorityElement = num;
    }
  }
  return majorityElement;
};

// Second Solution
var majorityElement = function (nums) {
  let hash = {};
  let highestCount = 0;
  let majorityElement = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
    highestCount = Math.max(hash[num], highestCount);
  }
  return Number(Object.keys(hash).find((key) => hash[key] === highestCount));
};

// Optimal / Boyer-Moore
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

console.log(result);
let array = [2, 2, 3, 1, 1];
let result = minorityElement(array);

function minorityElement(nums) {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (nums[i] === candidate) {
      count = 0;
    } else {
      count = 1;
      candidate = nums[i];
    }
  }

  return candidate;
}
