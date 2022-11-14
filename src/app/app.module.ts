import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './notifications/notifications.component';
import { CategoryComponent } from './category/category.component';
import { AddAnnouncementComponentComponent } from './add-announcement/add-announcement.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AnnouncementService } from './services/announcement.service';
import { CanDeactivateGuard } from './services/candeactivate-guard.service';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    CategoryComponent,
    AnnouncementsComponent,
    AddAnnouncementComponentComponent,
    HomeComponent,
    EditAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [AnnouncementService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
