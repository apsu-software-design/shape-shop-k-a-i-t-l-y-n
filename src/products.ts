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
    private productList;
    private quantityList;

    public constructor(){
        this.productList = [];
        this.quantityList = [];
    }

    public addProduct(name:string) :void 
    { 

    }
    public removeProduct(index:number):void
    {

    }
    public getProducts():Product
    {

    }

}