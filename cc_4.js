// Task 1: Customer Discounts
let purchaseAmount = 125 // Declares purchase amount
if (purchaseAmount > 100){  // If purchase amount is over 100 -> Outputs eligible for 15% discount and applies discount by multiplying purchase amount
purchaseAmount = purchaseAmount * 0.85 // 15% off discount
console.log("Eligible for 15% off discount")
} else { // If purchase amount is not over 100 -> Outputs not eligible for discount
    console.log("Not eligible for discount")
}
let finalAmount = purchaseAmount // Declares final amount variable
console.log(`Final Amount: $${finalAmount}`) // Outputs final amount

// Task 2: Sales Report
let sales = [85, 90, 67, 156, 25] // Declares array of sales figures
let totalSales = 0 // Declares total sales variable
for (let sale = 0; sale < sales.length; sale++){ // Totals sales until all sales figures are added
totalSales += sales[sale] // Sums sales figure amount into totalSales
}
console.log(`Total Sales: $${totalSales}`) // Outputs total sales

// Task 3: Inventory Depletion
let stock = 10 // Declares initial stock amount
while (stock >= 0) { // Creates loop to decrease stock by 1
    console.log(`Stock: ${stock}`) // Outputs reamaining stock
    stock-- // Decreases stock by 1
}