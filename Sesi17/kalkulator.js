let a = process.argv[2]
let b = process.argv[3]

console.log("SUM: " + (parseInt(a)+parseInt(b)))
console.log("Difference: " + (a - b))
console.log("Product: " + (a * b))
console.log("Quotient: " + (a / b))
console.log("Remainder: " + (a % b))
console.log("Num 1 Increment: " + (a++))
console.log("Num 2 Decrement: " + (b--))