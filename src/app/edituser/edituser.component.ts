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

  editEmail: boolean = true;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.editEmail = this.route.snapshot.queryParams['editMode'] === '1' ? true : false;
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    /*this.route.queryParams.subscribe((p) => {
      console.log(p)
    });
    this.route.fragment.subscribe((f) => {
      console.log(f)
    });*/
    // @ts-ignore
    this.user = <IUser>this.userService.users.find(user => user.id === +this.route.parent.snapshot.params['id']);
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
