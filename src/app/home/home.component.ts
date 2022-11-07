import { Component,OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'notifications-app';
  filteredAnnouncements : Announcement[]=[];
  announcements:Announcement[]=[];

selectedCategory:string='';

selectCategory(category:string){
  this.selectedCategory=category;
  if(category!=="All"){
    this.filterAnnouncements();
  }else{
    this.filteredAnnouncements=this.announcements;
  }
  

}
  constructor(private annManager:AnnouncementService){
    
    this.filteredAnnouncements=this.announcements;
  }
  ngOnInit(): void {
    this.announcements=this.annManager.announcements;
    throw new Error('Method not implemented.');
  }

  filterAnnouncements(){
    this.filteredAnnouncements=this.announcements.filter(announcements => Category[announcements.category]===this.selectedCategory);
  }

}
