export class Product {
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
export class ProductList{
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

//VIEW

//ShoppingCart View
public export ShoppingCartView{

}

//Show total price
public export TotalPriceView{

}
//Show list of product names
public export ProductNamesView{
    
}

//getView returns string object




































