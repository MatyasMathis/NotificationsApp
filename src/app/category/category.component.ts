import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Output() selectedCategoryEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category:string){
      this.selectedCategoryEmitter.emit(category);
      
  }

}
