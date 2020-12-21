function processData(input) {
  const arr = input.split("\n");
  const itr = arr[0];
  const contacts = arr
    .filter((element, index) => index > 0 && index <= itr)
    .reduce((item, element) => {
      elemArr = element.split(" ");
      item[elemArr[0]] = elemArr[1];
      return item;
    }, {});
  arr
    .filter((element, index, arr) => index > itr && index <= arr.length)
    .map((element) => {
      contacts[element]
        ? console.log(`${element}=${contacts[element]}`)
        : console.log("Not found");
    });
}
