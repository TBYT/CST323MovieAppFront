import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../models/Movie';
import { MovieDAO } from '../service/MovieDAO';
import { UserDAO } from '../service/UserDAO';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private service: MovieDAO, private middleware: UserDAO, private formBuilder: FormBuilder, private router: Router) { }

  movie : Movie;

  createForm = this.formBuilder.group({
    Title: '',
    Description: '',
    Director: '',
    Length: -1
  });

  newInfo() //resets the fields with no values, and resets the product variable. On button click of newInfo.
  {
    this.createForm.reset("");
    this.movie = new Movie(-1,"","","",-1);
    console.log("reset button pressed.");
  }

  ngOnInit(): void
  { 
    if(this.middleware.currentUser==undefined)
    {
      this.router.navigateByUrl('/login');
    }
    else{
    this.movie = new Movie(-1,"","","",-1); }
  }

  public onSubmit()
  {
    //get values from the form fields.
    let formReturn = this.createForm.value;
    //console.log(formReturn);
    this.movie._title = formReturn['Title'];
    this.movie._description = formReturn['Description'];
    this.movie._director = formReturn['Director'];
    this.movie._length = formReturn['Length'];
    this.movie._movieId = undefined;
    if ((formReturn['Title'] && formReturn['Description'] && formReturn['Director'] && formReturn['Length'])!="") //if values are not blank
    {
      if (Number(formReturn['Length'])) //if length is a number entered by the user.
      {// send to dao to create new movie
        //console.log(this.movie);
        this.service.createMovie( this.movie, (data: any) => 
        {
          console.log(data);
        });
        alert("Movie has been created!")
        this.router.navigateByUrl('/');
      }
      else alert("Please put a valid number for the length.")
    }
    else alert("Do not leave fields blank.")
  }

}
