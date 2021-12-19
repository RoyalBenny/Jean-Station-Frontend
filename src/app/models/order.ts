import { JSDocTagName } from "@angular/compiler/src/output/output_ast";

export class Order {
    constructor(
        public id:string,
        public userId:string,        
        public productID:string,
        public address:string,
        public price:number,
        public date:Date,
        public size:Size,
        public color:Color,
        public status:Status,
        public imageUrl: string
    ){}
}



export enum Status{
    APPROVED,
    DELIVERED,
    SHIPPED
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

