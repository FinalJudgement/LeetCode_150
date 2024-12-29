const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

var merge2 = function (nums1, m, nums2, n) {
  let p1 = m - 1; // 2
  let p2 = n - 1; // 2
  let p = m + n - 1; // 5

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
};
