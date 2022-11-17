import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { EventEmitter, Injectable, Output,OnInit } from "@angular/core";
import { Guid } from "guid-typescript";
import { Observable } from "rxjs";
import { Announcement } from "../announcement";
import { Category } from "../category";

@Injectable()
export class AnnouncementService {
   baseUrl="https://newsapi20221108120432.azurewebsites.net/api";
    announcements:Observable<Announcement[]>;
    
    constructor(private http:HttpClient){
    
    }
    getAnnouncements(): Observable<Announcement[]> {
      this.announcements = this.http.get<Announcement[]>(this.baseUrl + "/Announcements/");
      return this.announcements;
    }
    clearList(){
      if(this.canDelete()){
        this.http.delete(this.baseUrl+"/Announcements/").subscribe(info=>{
          console.log("All records cleared");
        });
      }
    }

    canDelete(){
      return confirm("Are you sure you want to delete all?");
    }

    readonly httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      observe: 'body'
    };

    deleteAnnouncement(id:Guid){
      this.http.delete(this.baseUrl+"/Announcements/"+id.toString()).subscribe();
    }
    

   
   
    editableAnnouncement:Announcement={id:'3',title:'',author:'',message:'',imageUrl:'',category:Category.Course};
    newAnnouncement:Announcement={id:'3',title:'',author:'',message:'',imageUrl:'',category:Category.Course};

    addAnnouncement(announcement: Announcement) {
      this.http.post<Announcement[]>(this.baseUrl + "/Announcements/", {
        title:announcement.title,
        message:announcement.message,
        author:announcement.author,
        category:Category[announcement.category], 
        imageUrl:announcement.imageUrl, 
        id:announcement.id
      }).subscribe();
    }

    editAnnouncement(announcement:Announcement){
      this.http.put(this.baseUrl+'/Announcements/'+announcement.id.toString(),announcement).subscribe();
    }
}