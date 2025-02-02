// Task 1: Customer Discounts
let purchaseAmount = 125 // Declares purchase amount
if (purchaseAmount > 100){  // If purchase amount is over 100 -> Outputs eligible for 15% discount and applies discount by multiplying purchase amount
purchaseAmount = purchaseAmount * 0.85 // 15% off discount
console.log("Eligible for 15% off discount")
} else { // If purchase amount is not over 100 -> Outputs not eligible for discount
    console.log("Not eligible for discount")
}
let finalAmount = purchaseAmount // Declares final amount variable
console.log(`Final amount: $${finalAmount}`) // Outputs final amount

