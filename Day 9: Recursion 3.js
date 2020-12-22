function factorial(n) {
  let fact;
  n > 0 ? (fact = n * factorial(n - 1)) : (fact = 1);
  return fact;
}
