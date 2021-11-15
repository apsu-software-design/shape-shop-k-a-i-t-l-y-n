"use strict";
exports.__esModule = true;
exports.ProductNamesView = exports.TotalPriceView = exports.ShoppingCartView = exports.ProductList = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    Product.prototype.getName = function () { return this.name; };
    Product.prototype.getPrice = function () { return this.price; };
    Product.prototype.getDescription = function () { return this.description; };
    return Product;
}());
exports.Product = Product;
//MODEL
var ProductList = /** @class */ (function () {
    function ProductList() {
        this.productList = [];
        this.quantityList = [];
    }
    ProductList.prototype.addProduct = function (product) {
        this.productList.push(product);
    };
    ProductList.prototype.addQuantity = function (quantity) {
        this.quantityList.push(quantity);
    };
    ProductList.prototype.removeProduct = function (index) {
        this.productList.splice(index, 1);
        this.quantityList.splice(index, 1);
    };
    ProductList.prototype.getProductList = function () { return this.productList; };
    ProductList.prototype.getQuantityList = function () { return this.quantityList; };
    return ProductList;
}());
exports.ProductList = ProductList;
/**
function viewItemsInCart() {
    for (let i = 0; i < shopping_cart.length; i++) {
        console.log("");
        console.log("       Name: "+shopping_cart[i].getName());
        console.log("      Price: "+shopping_cart[i].getPrice());
        console.log("Description: "+shopping_cart[i].getDescription());
        console.log("   Quantity: "+quantity_cart[i]);
    }
}

function viewCartTotal() {
    let total: number = 0;
    for (let i = 0; i < shopping_cart.length; i++) {
        total += shopping_cart[i].getPrice() * quantity_cart[i];
    }
    console.log("Shopping Cart Total: "+total);
}\*/
//ShoppingCart View
var ShoppingCartView = /** @class */ (function () {
    function ShoppingCartView(productList) {
        this.productList = productList;
    }
    ShoppingCartView.getView = function (productName, productPrice, productDescription, quantity) {
        return "\nName: " + productName + "\nPrice: " + productPrice + "\nDescription: " + productDescription + "\nQuantity: " + quantity;
    };
    return ShoppingCartView;
}());
exports.ShoppingCartView = ShoppingCartView;
//Show total price
var TotalPriceView = /** @class */ (function () {
    function TotalPriceView(productList) {
        this.productList = productList;
    }
    TotalPriceView.getView = function (total) {
        return "\nShopping Cart Total: " + total;
    };
    return TotalPriceView;
}());
exports.TotalPriceView = TotalPriceView;
//Show list of product names
var ProductNamesView = /** @class */ (function () {
    function ProductNamesView(productList) {
        this.productList = productList;
    }
    ProductNamesView.getView = function (productName, index) {
        var itemCount = index + 1;
        return "\n" + itemCount + ". Name: " + productName;
    };
    return ProductNamesView;
}());
exports.ProductNamesView = ProductNamesView;
