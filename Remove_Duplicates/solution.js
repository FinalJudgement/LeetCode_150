let numbers = [0, 0, 0, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }
};

// Efficient:
var removeEfficiently = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; // pointer for placement of next unique element

  // Start from second element since first is always unique
  for (let i = 1; i < nums.length; i++) {
    // If current element is different from previous
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Place it at k position
      k++; // Increment k
    }
  }
};
