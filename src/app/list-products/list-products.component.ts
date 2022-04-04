import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie';
import { MovieDAO } from '../service/MovieDAO';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MovieDAO) {}

  selectedMovie: number;
  movies: Movie[] = [];

  ngOnInit()
  {
    //list of movies that anyone can view on the website.
    	this.route.queryParams.subscribe(params => {
        	this.service.getMovies((movies:Movie[]) =>
        	{
          		this.movies = movies;
              //console.log(products.length);
          		this.selectedMovie = null; // user does not select anything on initialization.
        	});
    	});
  }

  public onSelectMovie(id: number)
  {
    this.selectedMovie = id;
  }

}
