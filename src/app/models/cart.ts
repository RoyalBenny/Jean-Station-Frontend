import { Category, Section } from "./product";

export class Cart {
    constructor(
        public id: string,
        public userId:string,
        public itemId:string,
        public name: string, 
        public price: number, 
        public category: Category,
        public imageUrl: string,
        public description: string, 
        public quantity: number,
        public discount:number,
        public section:Section,
        public status:string
    ){}
}
