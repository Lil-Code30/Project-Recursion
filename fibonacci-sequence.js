// fibonacci sequence
function fibs(n) {
  const values = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      values.push(0);
    } else if (i == 1 || i == 2) {
      values.push(1);
    } else {
      let k = values[i - 1] + values[i - 2];
      values.push(k);
    }
  }

  return values;
}

console.log("Iteration Output");
console.log(fibs(8));

// recursion
function fibsRec(n) {
  if (n === 0) {
    return;
  } else if (n === 1) {
    return [0, 1];
  } else {
    // fibsRec(n-1) + fibsRec(n-2)
    let k = fibsRec(n - 1);
    k.push(k[k.length - 1] + k[k.length - 2]);

    return k;
  }
}

console.log("Recursion Output");
console.log(fibsRec(8));

/* fibonacci
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
*/
