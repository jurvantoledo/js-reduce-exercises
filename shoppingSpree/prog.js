function shoppingSpree(arr) {
    return arr.reduce((totalAmount, item) => {
        return totalAmount + item.price;
    }, 0)
}
 
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
 
console.log(shoppingSpree(wishlist)); // 227005