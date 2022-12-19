const maxLimit = 1_000_000;
let n1 = BigInt(0),
  n2 = BigInt(1),
  iteration = 0;
console.log("Starting fibonacci worker");
console.time("fibonacci");
while (++iteration <= maxLimit) {
  [n2, n1] = [n1 + n2, n2];
}

console.log("Fibonacci result: ", n1);
console.timeEnd("fibonacci");
