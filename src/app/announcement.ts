import { TitleStrategy } from "@angular/router";
import { Category } from "./category";

export interface Announcement {
    id:string;
    imageUrl:string;
    message:string;
    title:string;
    author:string;
    category:Category;
    
}
