import { Component, OnInit } from '@angular/core';
import { RoleHelper } from 'src/app/shared/helpers/role.helper';
import { ProductsAdminService } from '../../shared/services/products-admin.service';
import { GetAllProductsResponseAdminView, GetAllProductResponseAdminViewItem } from '../../shared/entities/products/response/get-all-products-response.admin.view';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public role: string
  // allItems = this.getProductService.productList;
  public model: GetAllProductsResponseAdminView = new GetAllProductsResponseAdminView();
  search = new FormControl();

  constructor(private productAdminService: ProductsAdminService, private roleHelper: RoleHelper) { }

  ngOnInit() {
    this.role = this.roleHelper.getRole();
    this.getAll();
  }

  public getAll(): void {
    this.productAdminService.getAll().subscribe((productItems) => {
      this.model = productItems;
    });
  }


  public getAllBySearchQuery(query: string) {
    let result: Array<GetAllProductResponseAdminViewItem> = [];
    if (!query) {
      result = this.model.products;
    } else {
      result = this.model.products.filter(x => x.title.includes(query));
    }
    return result;
  }



  public delete(id: string) {
    // console.log(this.model.products.findIndex((el)=> el.productId == id))
    // console.log(this.model.products.find((el)=> el.productId == id))
    // console.log(this.model.products.indexOf(this.model.products.find((el)=> el.productId == id)))


    this.productAdminService.delete(id).subscribe(() => {
      this.getAll();
      // let index = this.model.products.findIndex((el)=> el.productId == id);
      // this.model.products.splice(index, 1);
    },
      (error) => {
        alert(error)
      });
  }




}
