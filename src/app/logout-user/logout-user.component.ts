import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDAO } from '../service/UserDAO';

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.css']
})
export class LogoutUserComponent implements OnInit {

  constructor(private router: Router, private service: UserDAO) { }

  ngOnInit(): void 
  {
    if(this.service.currentUser!=undefined)
    {
      this.service.currentUser = undefined;
      alert("You are now logged out!");
      this.router.navigateByUrl('/');
    }
    else
    {
      alert("Please login first!");
      this.router.navigateByUrl('/');
    }
  }

}