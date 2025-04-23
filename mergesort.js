function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const middle = Math.ceil(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // recursively sort the two halves
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // create an empty array to store the sorted elements
    const sortedArray = [];

    let i = 0;
    let j = 0;
    let k = 0;

    // sort and merge the two halves into the sorted array
    while (i < sortedLeftHalf.length && j < sortedRightHalf.length) {
      if (sortedLeftHalf[i] < sortedRightHalf[j]) {
        sortedArray[k++] = sortedLeftHalf[i++];
      } else {
        sortedArray[k++] = sortedRightHalf[j++];
      }
    }

    // add remaining elements of the left half to the sorted array
    for (; i < sortedLeftHalf.length; i++) {
      sortedArray[k++] = sortedLeftHalf[i];
    }

    // add remaining elements of the right half to the sorted array
    for (; j < sortedRightHalf.length; j++) {
      sortedArray[k++] = sortedRightHalf[j];
    }
    return sortedArray;
  }
}
