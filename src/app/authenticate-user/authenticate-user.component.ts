import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UserDAO } from '../service/UserDAO';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authenticate-user',
  templateUrl: './authenticate-user.component.html',
  styleUrls: ['./authenticate-user.component.css']
})
export class AuthenticateUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserDAO, private formBuilder: FormBuilder, private location: Location) { }

  selectedChoice: number;
  //using UserDAO 'currentUser' for user state throughout app, not this variable.
  user: User;

  registerForm = this.formBuilder.group({
    Username: ['',[ Validators.minLength(4), Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['',[ Validators.minLength(6), Validators.required]],
    ConfirmPass: ['',[ Validators.minLength(6), Validators.required]]
  });

  loginForm = this.formBuilder.group({
    LoginUsername: ['',[ Validators.required]],
    LoginPassword: ['',[ Validators.required]]
  });

  ngOnInit()
  {
    this.user = new User(-1,"","","");
  }

  public onSelectChoice(id: number)
  {
    this.selectedChoice = id;
  }

  public onSubmit(): void 
  {
    if(this.selectedChoice==0)
    {
      //get values from the form fields.
      let formReturn = this.registerForm.value;
      //console.log(this.product)
      if (!this.registerForm.invalid) //if values are not blank
      {
        if (formReturn['Password'] == formReturn['ConfirmPass']) //if both password fields are the same
        {
          this.service.getUsers((usersList:User[]) =>
        	{
            let nodupe = false;
            for (let i = 0; i < usersList.length; i++)
            {
              if(usersList[i]._username == formReturn['Username'])
              {
                nodupe = true;
                alert("This username is taken.")
              }
            }
            if(nodupe == false)
            {
              // send to dao to create user if there is no duplicate username.
              this.user._username = formReturn['Username'];
              this.user._password = formReturn['Password'];
              this.user._email = formReturn['Email'];
              this.user._userId = undefined;
              this.service.createUser( this.user, (user:User) => 
              {
                  this.user = user;
                  this.loginForm.setValue({LoginUsername: this.user._username, LoginPassword: this.user._password});
                  alert("Account Created, now Login.");
                  //this.router.navigateByUrl('/');
              });
            }
        	});
        }
        else alert("Passwords do not match.")
      }
      else alert("Invalid entry.")
    }
    else if (this.selectedChoice==1)
    {
      let formReturn = this.loginForm.value;
      if (!this.loginForm.invalid) //if values are not blank
      {
        this.user._username = formReturn['LoginUsername'];
        this.user._password = formReturn['LoginPassword'];
        this.service.LoginAuth(this.user, (callback:any)=>
        {// send to dao to create user
          if(callback==true)
          {
            alert("Login successful!");
            this.location.back();
          }
          else { alert("Login credentials are invalid."); }
        });
      }
      else alert("Do not leave fields blank.")
    }
  }
}