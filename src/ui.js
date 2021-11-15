"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var module_1 = require();
from;
'./products';
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
            ProductList.addProduct(new module_1.Product("Triangle", 3.5, "It's got three sides!"));
            break;
        case '2':
            ProductList.addProduct(new module_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            ProductList.addProduct(new module_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity() {
    console.log("How many of this shape would you like to purchase?\n  ");
    var response = readlineSync.question('> ');
    ProductList.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart() {
    console.log("Select an item to be removed from the cart.\n  ");
    for (var i = 0; i < ProductList.getProductList().length; i++) {
        var productList = ProductList.getProductList();
        var productName = productList[i].getName();
        ProductNamesView.getView(productName);
    }
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    ProductList.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart() {
    var productList = ProductList.getProductList();
    var quantityList = ProductList.getQuantity();
    for (var i = 0; i < ProductList.getProductList().length; i++) {
        var productName = productList[i].getName();
        var productPrice = productList[i].getPrice();
        var productDescription = productList[i].getDescription();
        var quantity = quantityList[i];
        ShoppingCartView.getView(productList, productName, productPrice, productDescription, quantity);
    }
}
function viewCartTotal() {
    var total = 0;
    var productList = ProductList.getProductList();
    var quantityList = ProductList.getQuantity();
    for (var i = 0; i < ProductList.getProductList().length; i++) {
        total += productList[i].getPrice() * quantityList[i];
    }
    TotalPriceView.getView(total);
}
