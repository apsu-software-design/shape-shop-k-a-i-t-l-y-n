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

export class ProductList{
    private productList: Product[];
    private quantityList: number[];

    public constructor(){
        this.productList = [];
        this.quantityList = [];
    }

    public addProduct(product:Product) :void 
    { 
        this.productList.push(product);
    }
    public removeProduct(index:number):void
    {

    }
    public getProductList():ProductList
    {
        let productList = this.productList;
        return productList;
    }

}