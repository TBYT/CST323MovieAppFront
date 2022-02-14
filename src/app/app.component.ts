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

  constructor(private router: Router)
  {
    
  }

  // public displayProductList()
  // {
  //   this.router.navigate(['list-products'], { queryParams: { data: new Date()} });
  // }
}
