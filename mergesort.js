function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const middle = Math.ceil(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    return mergeSort(leftHalf).concat(mergeSort(rightHalf));
  }
}
