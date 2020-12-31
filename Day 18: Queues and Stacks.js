class Solution {
  constructor() {
    this.inpWord = [];
    this.reverse = [];
  }
  pushCharacter(char) {
    this.inpWord.push(char);
  }
  enqueueCharacter(char) {
    this.reverse.unshift(char);
  }
  popCharacter() {
    return this.inpWord.pop();
  }
  dequeueCharacter() {
    return this.reverse.pop();
  }
}
