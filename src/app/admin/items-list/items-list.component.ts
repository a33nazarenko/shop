import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  productList:Array<Product> = [
    {title: 'hjdsafjhhdf', cost: 2000},
    {title: 'hjdsafjhhdf', cost: 2000},
    {title: 'hjdsafjhhdf', cost: 2000},
    {title: 'hjdsafjhhdf', cost: 2000}
  ]

  constructor() { }

  ngOnInit() {
 
  }


}
