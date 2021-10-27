let[a,b] = process.argv.slice(2)

console.log("SUM: " + ((+a) + (+b)))
console.log("Difference: " + (a - b))
console.log("Product: " + (a * b))
console.log("Quotient: " + (a / b))
console.log("Remainder: " + (a % b))
console.log("Num 1 Increment: " + ((+a) + 1))
console.log("Num 2 Decrement: " + ((+b) - 1))