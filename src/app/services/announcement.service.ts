import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable, Output,OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Announcement } from "../announcement";
import { Category } from "../category";

@Injectable()
export class AnnouncementService {
    announcements:Announcement[]=[{
        message:'hello',
        title:'title1',
        author:'author1',
        category:Category.Laboratory,
        id:'0',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RVDcLq_l7P-DVqORf949grUA0OluKKZUwlVKD9QcvA&s'
        
      },{
        message:'Hi',
        title:'title2',
        author:'author2',
        category:Category.Course,
        id:'1',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIlWLQB7-cU4kezlKDWJ6lrlq2AjI1G1SEh_V6yBKfFa-wJTVt5J3T5hKXQgkAsLQFv0&usqp=CAU'
       
      }
    ];
    //  baseUrl='https://newsapi20221108120432.azurewebsites.net/api';
    // constructor(private http:HttpClient){}

    // readonly httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //   })
    // };

    // public getUsers():Observable<Announcement[]>{
    //   return this.http.get<Announcement[]>(this.baseUrl);
    // }
    // ngOnInit(): void {
      
    // }

   
   
    editableAnnouncement:Announcement={id:'3',title:'',author:'',message:'',imageUrl:'',category:Category.Course};
    newAnnouncement:Announcement={id:'3',title:'',author:'',message:'',imageUrl:'',category:Category.Course};

    addAnnouncement(announcement:Announcement){
        this.announcements.push(announcement);
    }
}