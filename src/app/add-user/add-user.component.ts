import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../service/user.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

  }

  onSubmit() {
    this.userService.addUser(this.addForm.value)
      .then(data => {
        this.router.navigate(['list-user']);
        alert('Data Saved Successfully');
      });

  }

}
