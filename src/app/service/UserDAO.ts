import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { backendUri } from '../../../server.js';

@Injectable({providedIn: 'root'})
export class UserDAO
{
  //local use only
  private users: User[];
  //global use only
  currentUser: User;

  hostname:string = backendUri + 'userservice';

  constructor(private http: HttpClient)
  {
  }

  public LoginAuth(passedUser: User, callback:any)
  {
    // Return the list of Users from rest service.
    this.http.get<User[]>(this.hostname + "/allusers")
    .subscribe((results) =>
      {
        	let users:User[] = [];
        	for(let x=0;x < results.length;++x)
        	{
          		users.push(new User(results[x]['id'], results[x]['username'], results[x]['password'], results[x]['email']));
        	}
          //console.log(results);
          for(let x=0;x < users.length; ++x)
          {
            if ((passedUser._username == users[x]._username) && (passedUser._password == users[x]._password))
            {
              this.currentUser = users[x];
              callback(true);
            }
          }
       });
  }

  public getUsers(callback:any)
  {
    // Return the list of Users from rest service.
    this.http.get<User[]>(this.hostname + "/allusers")
    .subscribe((results) =>
      {
        	let users:User[] = [];
        	for(let x=0;x < results.length;++x)
        	{
          		users.push(new User(results[x]['id'], results[x]['username'], results[x]['password'], results[x]['email']));
        	}
          //console.log(results);
        	callback(users);
       });
  }

  //no references yet, will implement in final milestone
  public getUserById(id:number, callback:any)
  {
    //
    this.http.get<User>(this.hostname + "/oneuser/" + id)
      .subscribe((data) =>
      {
        //console.log(data);
            let user:User = new User(data['id'], 
              data['username'], 
              data['password'], 
              data['email']);
        	callback(user);
      });
  }

  public createUser(user:User, callback:any)
  {
    //console.log(user);
    this.http.post<User>(this.hostname + "/createuser", user)
    .subscribe((data) =>
    {
      callback(data);
    });
  }
  
  //no references yet, will implement in final milestone
  public deleteUser(id:number, callback:any)
  {
    //
    this.http.delete(this.hostname + "/delete/" + id)
    .subscribe((data) =>
    {
      	callback(data);
    });
  }
}
