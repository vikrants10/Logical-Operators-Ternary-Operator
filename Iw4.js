// Given 3 numbers (all different values), print which is greatest

let n1 = 87;
let n2 = 76;
let n3 = 75;
if (n1 > n2 && n1 > n3) {
  console.log("Greatest is", "n1");
} else if (n2 > n1 && n2 > n3) {
  console.log("Greatest is", "n2");
} else {
  console.log("Greatest is", "n3");
}