import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateProductsRequestAdminView } from '../../shared/entities/products/request/create-products-request.admin.view';
import { ProductsAdminService } from '../../shared/services/products-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  createProductForm: FormGroup;
  constructor(private productsAdminService: ProductsAdminService, private router: Router) { }

  ngOnInit() {
    this.createProductForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'price': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.minLength(5)])
    });

    
  }

  onSubmit() {
    this.createProduct();
  }

  createProduct() {
    const model: CreateProductsRequestAdminView = { ...this.createProductForm.value };
   
    this.productsAdminService.create(model).subscribe(() => {
      this.router.navigate(['/admin/dashboard']);
    })

  }

}
