let n = prompt("Enter a number");
function reverseNumber(n) {
  let reversed = 0;
  if (n == 0) {
    return 0;
  } else {
    while (n > 0) {
      let digit = n % 10;
      reversed = reversed * 10 + digit;
      n = Math.floor(n / 10);
    }
  }
  return reversed;
}

console.log(reverseNumber(n));
