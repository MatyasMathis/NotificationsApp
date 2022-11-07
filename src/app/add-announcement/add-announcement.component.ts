import { Component, OnInit,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Announcement } from '../announcement';
import { Category } from '../category';


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
   category:string='General';
   categories:string[]=['General','Course','Laboratory'];
  
  constructor() { }
 
  ngOnInit(): void {
  }
  onAddAnnouncement(){
    if(this.author!=='' && this.title!=='' && this.message!=='' && this.imageURL!==''){
      console.log(this.title,this.author,this.category,this.message,this.imageURL);
    }
    
    
  }

}
