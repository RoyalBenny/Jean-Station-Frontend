export class Order {
    constructor(
        public id:string,
        public address:string,
        public price:number,
        public date:Date,
        public status:Status,
    ){}
}

export enum Status{
    PENDING,
    APPROVED,
    REJECTED,
    CANCELED,
    DELIVERED,
    SHIPPED
}
