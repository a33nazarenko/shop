import { Injectable } from "@angular/core";
import { Product } from 'src/app/shared/models/product.model';
import { getNativeByIndex } from '@angular/core/src/render3/util';

Injectable();
export class GetProductService{
    constructor() {
        
    }

    productList:Array<Product> = [
        {title: 'one', cost: 123, id: 1, desc: ''},
        {title: 'two', cost: 5666, id: 2, desc: ''},
        {title: 'tree', cost: 77676, id: 3, desc: ''},
        {title: 'four', cost: 999, id: 4, desc: ''}
      ]


    getById(id) {
        const result = this.productList.find(x=>x.id===id);
        return result;
     
    }
}