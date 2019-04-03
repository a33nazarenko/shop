import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsAdminService } from '../../shared/services/products-admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateProductsRequestAdminView } from '../../shared/entities/products/request/update-products-request.admin.view';
import { GetByIdProductsResponseAdminView } from '../../shared/entities/products/response/get-by-id-products-response.admin.view';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  updateProductForm: FormGroup;
  constructor(private productsAdminService: ProductsAdminService, private route: ActivatedRoute, private router: Router) { }
  id:string;

  x: GetByIdProductsResponseAdminView = new GetByIdProductsResponseAdminView();
  ngOnInit() {
    this.updateProductForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'price': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.minLength(5)])
    });

    this.id = this.route.snapshot.params['id'];
    this.productsAdminService.getById(this.id).subscribe(res => {
      this.x = res;
      this.updateProductForm.setValue({
        title: res.title,
        price: res.price,
        description: res.description,
        image: res.image
      })
    });
    
  }

  onSubmit() { 
    const model: UpdateProductsRequestAdminView = { ...this.updateProductForm.value };
    model.productId = this.id;
  
    this.productsAdminService.update(model).subscribe(() => {
      this.router.navigate(['admin/product-detail', model.productId]);
    });
  }


}
