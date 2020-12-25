class Student extends Person {
  constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }

  calculate() {
    const sum = this.scores.reduce((prev, curr) => prev + curr, 0);
    let grade;
    const avg = sum / this.scores.length;
    avg >= 90
      ? (grade = "O")
      : avg < 100 && avg >= 80
      ? (grade = "E")
      : avg < 80 && avg >= 70
      ? (grade = "A")
      : avg < 70 && avg >= 55
      ? (grade = "P")
      : avg < 55 && avg >= 40
      ? (grade = "D")
      : (grade = "T");
      
    return grade;
  }
}
