function main() {
  const S = readLine();
  try {
    const result = parseInt(S) || error;
    console.log(result);
  } catch (error) {
    console.log("Bad String");
  }
}

// Without try - catch

function main() {
  const S = readLine();
  const result = parseInt(S) || "Bad String";
  console.log(result);
}
