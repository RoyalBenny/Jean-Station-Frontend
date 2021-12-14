import { Category } from "./product";
import { Role } from "./user";

export class Offer{
        id:string;
        category:Category;
        role:Role;
        validityDate:Date;
    constructor(
         id:string,
        category:Category,
        role:Role,
        validityDate:Date,
        ){
            this.id=id;
            this.category=category;
            this.role=role;
            this.validityDate=validityDate;    
        }
}
