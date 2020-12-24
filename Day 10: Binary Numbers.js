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




// alternative

function main() {
  const number = parseInt(readLine(), 10);
  const binaryOnes = number.toString(2).split(0);
  let maxConsecutiveOnes = 0;
  binaryOnes.map(
    (element) => (maxConsecutiveOnes = Math.max(maxConsecutiveOnes, element.length))
  );
  console.log(maxConsecutiveOnes);
}
