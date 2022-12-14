import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private annManager:AnnouncementService, private httpClient:HttpClientModule){
    
    this.filteredAnnouncements=this.announcements;
  }
  ngOnInit(): void {
    this.annManager. getAnnouncements().subscribe((ann:Announcement[])=>{
      this.announcements=ann;
    });
    
  }

  filterAnnouncements(){
    this.filteredAnnouncements=this.announcements.filter(announcements => Category[announcements.category]===this.selectedCategory);
  }

}
