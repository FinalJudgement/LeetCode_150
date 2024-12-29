main();

function main() {
  let array = [];

  for (let i = 1; i <= 5; i++) {
    array.push(i);
  }
  console.log(array);
  miniMaxSum(array);
}

function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  console.log(`${sum - max} ${sum - min}`);
}
