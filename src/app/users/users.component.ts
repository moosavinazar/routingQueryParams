import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../interfaces/app-interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
