export class Product {
    id: string;
    name: string;
    price: number;
    category: Category;
    section:Section;
    imageUrl: string;
    description: string;
    quantity: number;
    discount:number;
    status:string;
    constructor(id: string, name: string, price: number, category: Category,
         imageUrl: string, description: string,  quantity: number,discount:number,section:Section,status:string,) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.description = description;
        this.quantity = quantity;
        this.discount=discount;
        this.section=section;
        this.status=status;
        
    }   

}

export enum Category{
    Pants,
    Shirt,
    Shoes,
    Tshirt,
    Blouses
}

export enum Section{
    Men,
    Women,
    Boy,
    Girl
}