class Student extends Person {
  constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }

  calculate() {
    const sum = this.scores.reduce((prev, curr) => prev + curr, 0);
    const avg = sum / this.scores.length;
    return avg >= 90
      ? "O"
      : avg < 100 && avg >= 80
      ? "E"
      : avg < 80 && avg >= 70
      ? "A"
      : avg < 70 && avg >= 55
      ? "P"
      : avg < 55 && avg >= 40
      ? "D"
      : "T";
  }
}
