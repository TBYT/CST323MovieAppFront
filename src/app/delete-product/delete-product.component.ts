import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDAO } from '../service/MovieDAO';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MovieDAO) { }

  id: number;
  deleted: boolean = false;

  ngOnInit(): void 
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.deleteMovie( this.id, (any) =>
    {
      this.deleted = true;
      alert("Movie has been deleted");
        //console.log(product);
    });
    

  }

}
