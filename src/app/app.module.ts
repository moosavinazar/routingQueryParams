import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    EdituserComponent,
    HomeComponent,
    NotfoundComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
