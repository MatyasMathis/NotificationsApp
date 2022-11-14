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

   title:string='';
   author:string='';
   imageURL:string='';
   message:string='';
   category:Category=Category.Course;
   formFilled:boolean=false;

   id:string='';
   
   categories:string[]=['General','Course','Laboratory'];
  
  constructor(private annManager:AnnouncementService,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id');
    });

    this.title=this.annManager.announcements[this.id].title;
    this.author=this.annManager.announcements[this.id].author;
    this.imageURL=this.annManager.announcements[this.id].imageUrl;
    this.message=this.annManager.announcements[this.id].message;
    
  }

  canExit(){
    if(this.author!=='' || this.title!=='' || this.message!=='' || this.imageURL!==''){
      return confirm("You have unsaved changes.Do you want to cancel?");
    }
    else{
      return true;
    }
   

  }

  onEditAnnouncement(){
    if(this.author!=='' && this.title!=='' && this.message!=='' && this.imageURL!==''){
      this.formFilled=true;
      this.annManager.announcements[this.id]={id:this.id,title:this.title,author:this.author,message:this.message,imageUrl:this.imageURL,category:this.category};
     
      this.title='';
      this.author='';
      this.imageURL='';
      this.message='';
     

      
    }
    
    
  }

}
