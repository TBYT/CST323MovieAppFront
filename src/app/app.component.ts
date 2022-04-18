import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Movies!';
  public reload(): void
  { 
    location.replace('/');
  }
  constructor(private router: Router)
  {
  }

	//testing git commit to heroku, and commit to github. without github to heroku integration.

  // public displayProductList()
  // {
  //   this.router.navigate(['list-products'], { queryParams: { data: new Date()} });
  // }
}
