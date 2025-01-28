// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function Factorial(n) {
  var sum = 0;
  if (n == 1) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}

console.log(Factorial(5));
