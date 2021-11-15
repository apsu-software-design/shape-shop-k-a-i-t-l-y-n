"use strict";
//User Interface for The Shopping Cart 
//@author James Church
exports.__esModule = true;
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("./products");
/**
// Hey look. It's a global variable. This is totally cool, right?
let shopping_cart: Product[] = [];
let quantity_cart: number[] = [];
*/
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart();
                break;
            case '2':
                removeItemFromCart();
                break;
            case '3':
                viewItemsInCart();
                break;
            case '4':
                viewCartTotal();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart() {
    letUserSelectItem();
    letUserSelectQuantity();
}
function letUserSelectItem() {
    console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            var product1 = new products_1.Product("Triangle", 3.5, "It's got three sides!");
            products_1.ProductList.addProduct(product1);
            break;
        case '2':
            products_1.ProductList.addProduct(new products_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            products_1.ProductList.addProduct(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity() {
    console.log("How many of this shape would you like to purchase?\n  ");
    var response = readlineSync.question('> ');
    products_1.ProductList.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart() {
    console.log("Select an item to be removed from the cart.\n  ");
    var productList = products_1.ProductList.getProductList();
    for (var i = 0; i < products_1.ProductList.getProductList().length; i++) {
        var productName = productList[i].getName();
        console.log(products_1.ProductNamesView.getView(productName));
    }
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    products_1.ProductList.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart() {
    var productList = products_1.ProductList.getProductList();
    var quantityList = products_1.ProductList.getQuantityList();
    for (var i = 0; i < products_1.ProductList.getProductList().length; i++) {
        var productName = productList[i].getName();
        var productPrice = productList[i].getPrice();
        var productDescription = productList[i].getDescription();
        var quantity = quantityList[i];
        console.log(products_1.ShoppingCartView.getView(productName, productPrice, productDescription, quantity));
    }
}
function viewCartTotal() {
    var total = 0;
    var productList = products_1.ProductList.getProductList();
    var quantityList = products_1.ProductList.getQuantityList();
    for (var i = 0; i < products_1.ProductList.getProductList().length; i++) {
        total += productList[i].getPrice() * quantityList[i];
    }
    console.log(products_1.TotalPriceView.getView(total));
}
