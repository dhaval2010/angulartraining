import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any=[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
   this.userService.getService()
    .then(result => this.users=result)
    .catch(error => console.log(error));
      console.log('user',this.users);
  }

  deleteUser(id): void {
    console.log(id)
    this.userService.deleteUser(id)
      .then( data => {
     alert('User Deleted')
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
