import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {IUser} from "../interfaces/app-interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editMode: boolean = false;
  user!: IUser;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = <IUser>this.userService.users.find(user => user.id === +this.route.snapshot.params['id']);
    if (!this.user) {
      this.router.navigate(['/users'])
    }
  }

  public onEditUser() {
    this.router.navigate(['/user', this.user.id, 'edit']);
    this.editMode = true;
  }

}
