main();

function main(arr, tar) {
  const array = [];
  const target = 72;

  for (let i = 0; i < 100; i++) {
    array.push(i);
  }

  let index = binarySearch(array, target);
}

function binarySearch(arr, tar) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    let value = arr[middle];

    console.log("middle: " + value);

    if (value < tar) {
      low = middle + 1;
    } else if (value > tar) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
}
