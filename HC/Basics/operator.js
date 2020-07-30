var sellingPrice = 199
var listingPrice = 799
//listingPrice -> Actual Price
var discountPercentage = ((listingPrice-sellingPrice)/listingPrice)*100;

console.log("Discount is :"+ Math.round(discountPercentage)+"%");