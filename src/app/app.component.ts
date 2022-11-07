import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';
  filteredAnnouncements : Announcement[]=[];
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

selectedCategory:string='';

selectCategory(category:string){
  this.selectedCategory=category;
  if(category!=="All"){
    this.filterAnnouncements();
  }else{
    this.filteredAnnouncements=this.announcements;
  }
  

}
  constructor(){
    this.filteredAnnouncements=this.announcements;
  }

  filterAnnouncements(){
    this.filteredAnnouncements=this.announcements.filter(announcements => Category[announcements.category]===this.selectedCategory);
  }
  

  
}
