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

// Task 4: Customer Survey
let responses = 0 // Declares responses amount
do { // Creates a loop to increase responses
    console.log(`Responses Collected: ${responses}`) // Outputs responses collected
    responses++ // Increases responses by 1
} while (responses <= 3) // Stops increasing responses when it reaches 3

// Task 5: Employee Information
let employee = {
    name: "Dora",
    position: "Explorer",
    salary: 56000
} // Declares employee object
for (let property in employee) { // Identifies properties in employee variable
    console.log(`${property}: ${employee[property]}`) // Outputs employee properties
}

// Task 6: Product Listings
let products = ["PlayStation 4", "Xbox One", "Nintendo Switch"] // Declares array of products
for (let productName of products){ // Creates loop to display each product
    console.log(`Product Name: ${productName}`) // Outputs product name
}

// Task 7: Order Processing
let orders = [649, 750, 452] // Declares orders array
orders.forEach(orderID => // Identifies orderID in array
    console.log(`Order ID: ${orderID}`) // Outputs order ID into console
)

// Task 8: Tax Calculation
function calculateTax(amount, taxRate){ // Creates function to calculate tax
    return amount * taxRate // Multiplies amount by taxRate to find calculated tax
}
console.log(`Calculated Tax: $${calculateTax(820, 0.075)}`) // Outputs calculated tax

// Task 9: Discount Application
function applyDiscount(price, discountPercentage){ // Created fucntion to find discounted price
    return price * discountPercentage // Returns discounted price by multiplying price by discountPercentage
}
console.log(`Discounted Price: $${applyDiscount(75, 0.85)}`) // Outputs discounted price

// Task 10: Loyalty Points
let purchasedAmount = 400 // Declares purchased amount variable
const calculatePoints = amount => amount / 10 // Divides purchase amount by 10 to calculate points earned
console.log(`Purchased Amount: $${purchasedAmount}`) // Outputs purchased amount
console.log(`Points Earned: ${calculatePoints(purchasedAmount)}`) // Outputs points earned

