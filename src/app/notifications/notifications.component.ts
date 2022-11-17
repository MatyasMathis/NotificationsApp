import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';


import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
 
  
  @Input() currentAnnouncement:Announcement={message:'message',author:'author',title:'title',imageUrl:'',category:Category.Course,id:'0'};

  
  constructor(private annManager:AnnouncementService) {
    
   }

  ngOnInit(): void {
    
  }

  onClickEdit(){
    this.annManager.editableAnnouncement=this.currentAnnouncement;
  }
  onClickDelete(){
    this.annManager.deleteAnnouncement(Guid.parse(this.currentAnnouncement.id));
    
  }
  


}
