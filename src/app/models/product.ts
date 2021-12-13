export class Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    section:Section;
    imageUrl: string;
    description: string;
    quantity: number;
    discount:number;

    constructor(id: number, name: string, price: number, category: Category,
         imageUrl: string, description: string,  quantity: number,discount:number,section:Section) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.description = description;
        this.quantity = quantity;
        this.discount=discount;
        this.section=section;
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