import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDAO } from '../service/MovieDAO';
import { UserDAO } from '../service/UserDAO';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private middleware: UserDAO, private service: MovieDAO, private router: Router) { }

  id: number;
  deleted: boolean = false;

  ngOnInit(): void 
  {
    if(this.middleware.currentUser==undefined)
    {
      this.router.navigateByUrl('/login');
    }
    else {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.deleteMovie( this.id, (any) =>
      {
        this.deleted = true;
        alert("Movie has been deleted");
          //console.log(movie);
          this.router.navigateByUrl('/');
      });
    }
  }
}