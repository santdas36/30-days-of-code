function main() {
  const N = parseInt(readLine(), 10);
  N % 2 === 1
    ? console.log("Weird")
    : N >= 2 && N <= 5
    ? console.log("Not Weird")
    : N >= 6 && N <= 20
    ? console.log("Weird")
    : console.log("Not Weird");
}
