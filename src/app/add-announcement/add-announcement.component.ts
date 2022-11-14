import { Component, OnInit,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'app-announcement-component',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponentComponent implements OnInit {
   // @Output() announcement:Announcement;
   title:string='';
   author:string='';
   imageURL:string='';
   message:string='';
   category:Category=Category.Course;
   formFilled:boolean=false;
   
   categories:string[]=['General','Course','Laboratory'];
  
  constructor(private annManager:AnnouncementService) { }
 
  ngOnInit(): void {
   
  }

  canExit(){
    if(this.author!=='' || this.title!=='' || this.message!=='' || this.imageURL!==''){
      return confirm("You have unsaved changes.Do you want to cancel?");
    }
    else{
      return true;
    }
   

  }

  onAddAnnouncement(){
    if(this.author!=='' && this.title!=='' && this.message!=='' && this.imageURL!==''){
      this.formFilled=true;
      this.annManager.newAnnouncement={id:'3',title:this.title,author:this.author,message:this.message,imageUrl:this.imageURL,category:this.category};
      this.annManager.addAnnouncement(this.annManager.newAnnouncement);
      this.title='';
      this.author='';
      this.imageURL='';
      this.message='';
     

      
    }
    
    
  }

}
