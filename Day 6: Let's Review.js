function processData(input) {
  const arr = input.split("\n");
  const itr = arr[0];
  for (let i = 0; i < itr; i++) {
    let oddStr = [];
    let evenStr = [];
    let curr = arr[i + 1].split("");
    let currLen = curr.length;
    for (let j = 0; j < currLen; j++) {
      if (j % 2 === 1) {
        oddStr.push(curr[j]);
      } else {
        evenStr.push(curr[j]);
      }
    }
    console.log(`${evenStr.join("")} ${oddStr.join("")}`);
    oddStr = [];
    evenStr = [];
  }
}
