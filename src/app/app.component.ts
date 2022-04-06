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

  //urllocation = location.pathname;

  constructor(private router: Router)
  {
    router.onSameUrlNavigation = 'reload';
  }

  // public displayProductList()
  // {
  //   this.router.navigate(['list-products'], { queryParams: { data: new Date()} });
  // }
}
