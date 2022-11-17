import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {

  //  title:string='';
  //  author:string='';
  //  imageURL:string='';
  //  message:string='';
  //  category:Category=Category.Course;
   formFilled:boolean=false;

   id:string='';
   currentAnnouncement:Announcement={message:'message',author:'author',title:'title',imageUrl:'',category:Category.Course,id:'0'};
   categories:string[]=['General','Course','Laboratory'];
  
  constructor(private annManager:AnnouncementService,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id');
    });

   this.annManager.announcements.subscribe(data=>{
    this.currentAnnouncement=data.find(ann=>ann.id===this.id);
   });
    
  }

  canExit(){
    if(this.currentAnnouncement.author!=='' || this.currentAnnouncement.title!=='' || this.currentAnnouncement.message!=='' || this.currentAnnouncement.imageUrl!==''){
      return confirm("You have unsaved changes.Do you want to cancel?");
    }
    else{
      return true;
    }
   

  }

  onEditAnnouncement(){
    if(this.currentAnnouncement.author!=='' && this.currentAnnouncement.title!=='' && this.currentAnnouncement.message!=='' && this.currentAnnouncement.imageUrl!==''){
      this.formFilled=true;
      this.annManager.editAnnouncement(this.currentAnnouncement);
      
    }
    
    
  }

}
