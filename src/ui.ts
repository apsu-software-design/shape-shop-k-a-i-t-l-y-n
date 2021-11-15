//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product, ProductList, ShoppingCartView, TotalPriceView, ProductNamesView} from './products';

/** 
// Hey look. It's a global variable. This is totally cool, right?
let shopping_cart: Product[] = [];
let quantity_cart: number[] = [];
*/

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}


/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(); break;
      case '2': removeItemFromCart(); break;
      case '3': viewItemsInCart(); break;
      case '4': viewCartTotal(); break;
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
    console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);

    let response = readlineSync.question('> ')

    switch(response) { //handle each response
      case '1': let product1:Product = new Product("Triangle", 3.5, "It's got three sides!"); ProductList.addProduct(product1); break;
      case '2': ProductList.addProduct(new Product("Square", 4.5, "It's got four sides!")); break;
      case '3': ProductList.addProduct(new Product("Pentagon", 5.5, "It's got five sides!")); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity() {
    console.log(`How many of this shape would you like to purchase?
  `);

    let response = readlineSync.question('> ')
    ProductList.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart() {
    console.log(`Select an item to be removed from the cart.
  `);

    for (let i = 0; i < ProductList.getProductList().length; i++) {
        let productList = ProductList.getProductList();
        let productName = productList[i].getName()
        ProductNamesView.getView(productName);
    }

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    ProductList.removeProduct(toRemove);

    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart() {
    let productList = ProductList.getProductList();
    let quantityList = ProductList.getQuantity();

    for (let i = 0; i < ProductList.getProductList().length; i++) {
        let productName = productList[i].getName();
        let productPrice = productList[i].getPrice();
        let productDescription = productList[i].getDescription();
        let quantity = quantityList[i];

        ShoppingCartView.getView(productList, productName, productPrice, productDescription, quantity);
    }
}

function viewCartTotal() {
    let total: number = 0;
    let productList = ProductList.getProductList();
    let quantityList = ProductList.getQuantity();

    for (let i = 0; i < ProductList.getProductList().length; i++) {
        total += productList[i].getPrice() * quantityList[i];
    }
    TotalPriceView.getView(total);
}
