// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

function fib(n) {
  if (n == 1) {
    return 1;
  } else {
    return n - 1 + fib(n - 2);
  }
}

console.log(fib(3));
