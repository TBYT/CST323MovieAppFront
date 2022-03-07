import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/Movie';
import { MovieDAO } from '../service/MovieDAO';
import { UserDAO } from '../service/UserDAO';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private service: MovieDAO, private middleware: UserDAO, private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router) { }

  movie: Movie;
  id: number;

  editForm = this.formBuilder.group({
    Title: '',
    Description: '',
    Director: '',
    Length: -1
  });

  ngOnInit()
  {
    if(this.middleware.currentUser==undefined)
    {
      this.router.navigateByUrl('/login');
    }
    else {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.getMovieById( this.id, (movie:Movie) =>
      {
          this.movie = movie;
          this.editForm.setValue({Title: movie._title, Description: movie._description, Director: movie._director, Length: movie._length});
          //console.log(movie);
      });
    }
  }

  public onSubmit(): void 
  {
    //get values from the form fields.
    let formReturn = this.editForm.value;
    this.movie._title = formReturn['Title'];
    this.movie._description = formReturn['Description'];
    this.movie._director = formReturn['Director'];
    this.movie._length = formReturn['Length'];
    //console.log(this.product)
    if ((formReturn['Title'] && formReturn['Description'] && formReturn['Director'] && formReturn['Length'])!="") //if values are not blank
    {
      if (Number(formReturn['Length'])) //if stock or price is a number entered by the user.
      {// send to dao to edit product
        this.service.updateMovie( this.movie, (movie:Movie) => 
        {
            this.movie = movie;
            alert("This movie has been updated!");
            this.router.navigateByUrl('/');
        });
      }
      else alert("Please put a valid number for movie length.")
    }
    else alert("Do not leave fields blank.")
  }
}
