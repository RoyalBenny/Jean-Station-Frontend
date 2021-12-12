export class Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    imageUrl: string;
    description: string;
    size: Size;
    color: Color;
    quantity: number;

    constructor(id: number, name: string, price: number, category: Category,
         imageUrl: string, description: string, size: Size, color: Color, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.description = description;
        this.size = size;
        this.color = color;
        this.quantity = quantity;
    }   

}
export enum Size{
    S,
    M,
    L
}

export enum Color{
    Red,
    Green,
    Blue,
    Black
}

export enum Category{
    Pants,
    Shirt,
    Shoes,
    Tshirt,
    Blouses
}