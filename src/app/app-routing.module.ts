import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {UsersComponent} from "./users/users.component";
import {EdituserComponent} from "./edituser/edituser.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id/edit', component: EdituserComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
