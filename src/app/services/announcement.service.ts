import { EventEmitter, Injectable, Output } from "@angular/core";
import { Announcement } from "../announcement";
import { Category } from "../category";
@Injectable()
export class AnnouncementService{
    announcements:Announcement[]=[{
        message:'hello',
        title:'title1',
        author:'author1',
        category:Category.Laboratory,
        id:'1',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPBF166wuR_qR6uXRcCxyHSG93_QA9rGYgpPpmnGOuA&s'
        
        
      },{
        message:'Hi',
        title:'title2',
        author:'author2',
        category:Category.Course,
        id:'2',
        imageUrl:'3f3f'
       
      }
    ];
   

    newAnnouncement:Announcement={id:'0',title:'',author:'',message:'',imageUrl:'',category:Category.Course};

    addAnnouncement(announcement:Announcement){
        this.announcements.push(announcement);
    }
}