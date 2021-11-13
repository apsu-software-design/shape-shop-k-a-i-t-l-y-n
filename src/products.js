"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductList = exports.Product = void 0;
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
    ProductList.prototype.removeProduct = function (index) {
        this.productList.splice(index, 1);
    };
    ProductList.prototype.getProductList = function () {
        var productList = this.productList;
        return productList;
    };
    return ProductList;
}());
exports.ProductList = ProductList;
//VIEW
