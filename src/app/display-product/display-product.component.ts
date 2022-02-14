import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MovieDAO } from '../service/MovieDAO';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor(private service: MovieDAO) { }

  @Input() movieId: number;
  movie: Movie;
//
  ngOnInit()
  {
    	this.service.getMovieById( this.movieId, (movie:Movie) =>
    	{
        	this.movie = movie;
          //console.log(this.productId);
    	});
  }

}
