import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { EventEmitter, Injectable, Output,OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Announcement } from "../announcement";
import { Category } from "../category";
import { map } from "rxjs/operators";

@Injectable()
export class AnnouncementService {
   baseUrl="https://notifications-app-62704-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
    announcements:Announcement[];
    // =[{
    //     message:'hello',
    //     title:'title1',
    //     author:'author1',
    //     category:Category.Laboratory,
    //     id:'0',
    //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RVDcLq_l7P-DVqORf949grUA0OluKKZUwlVKD9QcvA&s'
        
    //   },{
    //     message:'Hi',
    //     title:'title2',
    //     author:'author2',
    //     category:Category.Course,
    //     id:'1',
    //     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIlWLQB7-cU4kezlKDWJ6lrlq2AjI1G1SEh_V6yBKfFa-wJTVt5J3T5hKXQgkAsLQFv0&usqp=CAU'
       
    //   }
    // ];
    
    constructor(private http:HttpClient){
     this.fetchData();
    }
    fetchData(){
      this.http.get<{[key:string]:Announcement}>(this.baseUrl)
      .pipe(
        map(responseData=>{
        const postArray:Announcement[]=[];
        for(const key in responseData){
          
            postArray.push({...responseData[key],id:key});
          
        }
        return postArray;
      })
      )
      .subscribe(
        (data)=>{
          this.announcements=data;
          console.log("Szia"+data);
        }
      );
    }

    readonly httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    
    

   
   
    editableAnnouncement:Announcement={id:'3',title:'',author:'',message:'',imageUrl:'',category:Category.Course};
    newAnnouncement:Announcement={id:'3',title:'',author:'',message:'',imageUrl:'',category:Category.Course};

    addAnnouncement(announcement:Announcement){
          this.http.post(this.baseUrl,announcement).subscribe(responseData=>{
            console.log(responseData);
            
          });
    }
}