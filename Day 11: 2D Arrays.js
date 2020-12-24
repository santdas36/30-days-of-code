function main() {
  let arr = Array(6);
  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const hourglass = [];
  const itr = arr.length - 1;
  for (let i = 1; i < itr; i++) {
    for (let j = 1; j < itr; j++) {
      let sum =
        arr[i][j] +
        arr[i - 1][j] +
        arr[i + 1][j] +
        arr[i - 1][j + 1] +
        arr[i - 1][j - 1] +
        arr[i + 1][j + 1] +
        arr[i + 1][j - 1];
      hourglass.push(sum);
    }
  }
  const greatest = hourglass.reduce((prev, curr) => Math.max(prev, curr));
  console.log(greatest);
}
