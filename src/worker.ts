const maxLimit = 1_000_000;
let n1 = 0,
  n2 = 1;
console.log("Starting fibonacci worker");
while (n1 <= maxLimit) {
  [n2, n1] = [n1 + n2, n2];
}

console.log("Fibonacci result: ", n1);
