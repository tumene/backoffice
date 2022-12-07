import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  addUser(){
    this.router.navigate([
      '/customer-services/corporate-360/users/add-user'
    ]);
  }

}
