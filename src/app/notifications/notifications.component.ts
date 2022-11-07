import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() message='message';
  @Input() author='author';
  @Input() title='title';
  @Input() imagePath='';
  
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  


}
