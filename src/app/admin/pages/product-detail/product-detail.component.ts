import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsAdminService } from '../../shared/services/products-admin.service';
import { GetByIdProductsResponseAdminView } from '../../shared/entities/products/response/get-by-id-products-response.admin.view';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  x: GetByIdProductsResponseAdminView = new GetByIdProductsResponseAdminView();
  favorites: boolean = false;
  constructor(private route: ActivatedRoute, private productsAdminService: ProductsAdminService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     this.productsAdminService.getById(this.id).subscribe((res) => {
       this.x = res;
     });
  }

  addToFavorites() {
    this.favorites = !this.favorites;
  }
}
