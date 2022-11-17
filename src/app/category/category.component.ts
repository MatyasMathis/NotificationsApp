import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Output() selectedCategoryEmitter = new EventEmitter<string>();

  constructor(private annManager:AnnouncementService) { }

  ngOnInit(): void {
  }

  selectCategory(category:string){
      this.selectedCategoryEmitter.emit(category);
      
  }
  clearList(){
    this.annManager.clearList();
    
  }

}
