import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../../shared/services/get-product.service';
import { RoleHelper } from 'src/app/shared/helpers/role.helper';
import { ProductsAdminService } from '../../shared/services/products-admin.service';
import { GetAllProductsResponseAdminView } from '../../shared/entities/products/response/get-all-products-response.admin.view';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private productAdminService: ProductsAdminService, private roleHelper: RoleHelper) { }
  role: string
  // allItems = this.getProductService.productList;
  model: GetAllProductsResponseAdminView = new GetAllProductsResponseAdminView();

  ngOnInit() {
    this.role = this.roleHelper.getRole();
    this.productAdminService.getAll().subscribe((x) => {
      this.model = x;
    });

   
  }

  public delete(id:string){
    this.productAdminService.delete(id).subscribe(() => {

    });

    for(var i=0; i < this.model.products.length;  i++) {
      if(this.model.products[i].productId === id) {
        this.model.products.splice(i, 1);
      }
    }
  }

}
