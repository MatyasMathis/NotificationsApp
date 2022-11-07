import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAnnouncementComponentComponent } from './add-announcement/add-announcement.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  { path: '', component: HomeComponent, pathMatch:"full"  } ,
  { path: 'add', component: AddAnnouncementComponentComponent},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
