function main() {
  const decimal = parseInt(readLine(), 10);
  const binary = decimal.toString(2);
  let consecutiveOnes = 0;
  let max = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      consecutiveOnes++;
      maxOnes = Math.max(maxOnes, consecutiveOnes);
    } else {
      consecutiveOnes = 0;
    }
  }
  console.log(maxOnes);
}
