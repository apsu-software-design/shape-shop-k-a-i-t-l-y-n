export static class Product {
    private name: string;
    private price: number;
    private description: string;

    public constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    public getName(): string { return this.name; }
    public getPrice(): number { return this.price; }
    public getDescription(): string { return this.description; }
}
//MODEL
export static class ProductList{
    private productList: Product[];
    private quantityList: number[];

    public constructor(){
        this.productList = [];
        this.quantityList = [];
    }

    public addProduct(product:Product, quantity: number) :void 
    { 
        this.productList.push(product);
        this.quantityList.push(quantity);
    }
    public removeProduct(index:number):void
    {
        this.productList.splice(index, 1);
        this.quantityList.splice(index, 1);
    }
    public getProductList():ProductList
    {
        let productList = this.productList;
        return productList;
    }

}

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
export ShoppingCartView{
    private productList: ProductList;

    constructor(productList:ProductList)
    {
        this.productList = productList;
    }

    getView:string (productName: string, productPrice: number, productDescription: string, quantity: number )
    {
        return "\nName: " + productName + "\nPrice: " + productPrice + "\nDescription: " + productDescription + "\nQuantity: " + quantity;
    }

}

//Show total price
export TotalPriceView{
        private productList: ProductList;

    constructor(productList:ProductList)
    {
        this.productList = productList;
    }

    getView:string (total:String )
    {
        return "Shopping Cart Total: " + total;
    }

}
//Show list of product names
export ProductNamesView{
    private productList: ProductList;

    constructor(productList:ProductList)
    {
        this.productList = productList;
    }

    getView:string (productName: string)
    {
        return "\nName: " + productName;
    }
    
}





































