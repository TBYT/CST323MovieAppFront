import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';

@Injectable({providedIn: 'root'})
export class MovieDAO
{
  movies: Movie[] = [];

  str1:String = new String(process.env.BACKEND_URI);

  hostname:string = this.str1.concat('service');

  constructor(private http: HttpClient)
  {
  }

  public getMovies(callback:any)
  {
    // Return the list of Movies from rest service.
    this.http.get<Movie[]>(this.hostname + "/allmovies")
    .subscribe((results) =>
      {
        	let movies:Movie[] = [];
        	for(let x=0;x < results.length;++x)
        	{
          		movies.push(new Movie(results[x]['id'], results[x]['title'], results[x]['description'], results[x]['director'], results[x]['length']));
        	}
          //console.log(results);
        	callback(movies);
       });
  }

  public getMovieById(id:number, callback:any)
  {
    //
    this.http.get<Movie>(this.hostname + "/onemovie/" + id)
      .subscribe((data) =>
      {
        //console.log(data);
            let movie:Movie = new Movie(data['id'], 
              data['title'], 
              data['description'], 
              data['director'], 
              data['length']);
        	callback(movie);
    });
  }

  public createMovie(movie:Movie, callback:any)
  {
    //
    this.http.post<Movie>(this.hostname + "/createmovie", movie)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public updateMovie(movie:Movie, callback:any)
  {
    //
    this.http.put<Movie>(this.hostname + "/onemovie/" + movie._movieId, movie)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public deleteMovie(id:number, callback:any)
  {
    //
    this.http.delete(this.hostname + "/delete/" + id)
    .subscribe((data) =>
    {
      	callback(data);
    });

  }
}
