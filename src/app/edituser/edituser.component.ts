import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../interfaces/app-interface";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user!: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = <IUser>this.userService.users.find(user => user.id === +this.route.snapshot.params['id']);
    if (!this.user) {
      this.router.navigate(['/users'])
    }
  }

  public onSaveChanges(name: string, email: string) {
    this.user.name = name;
    this.user.email = email;
    this.router.navigate(['/users']);
  }

}
