import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateProductsRequestAdminView } from '../../shared/entities/products/create-products-request.admin.view';
import { ProductsAdminService } from '../../shared/services/products-admin.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  createProductForm: FormGroup;
  constructor(private productsAdminService: ProductsAdminService) { }

  ngOnInit() {
    this.createProductForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'cost': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required]),
      'desc': new FormControl(null, [Validators.minLength(50)])
    });

    
  }

  onSubmit() {
    const model: CreateProductsRequestAdminView = { ...this.createProductForm.value };

    this.productsAdminService.create(model).subscribe((response) => {
      console.log(response)
    })
  }

}
