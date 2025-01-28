//Calculate the sum
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
//
function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    let sum = 0;
    return (sum += n + sumTo(n - 1));
  }
}

console.log(sumTo(100));
