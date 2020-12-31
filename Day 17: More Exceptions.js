class Calculator {
  power(n, p) {
    const ans = n < 0 || p < 0 ? 
      "n and p should be non-negative" : 
      Math.pow(n, p);
    return ans;
  }
}
