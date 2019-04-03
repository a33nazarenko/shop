import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreateProductsRequestAdminView } from '../entities/products/request/create-products-request.admin.view';
import { HttpClient } from '@angular/common/http';
import { GetAllProductResponseAdminViewItem, GetAllProductsResponseAdminView } from '../entities/products/response/get-all-products-response.admin.view';
import { GenericResponseView } from 'src/app/shared/entities/generic-response.view';
import { map } from 'rxjs/operators';
import { GetByIdProductsResponseAdminView } from '../entities/products/response/get-by-id-products-response.admin.view';
import { UpdateProductsRequestAdminView } from '../entities/products/request/update-products-request.admin.view';

@Injectable()
export class ProductsAdminService {

    constructor(private http: HttpClient) {
        
    }

    create(model: CreateProductsRequestAdminView): Observable<void> {
        return this.http.post<void>('http://localhost:52994/api/admin/products/create', model);
    }


    getAll(): Observable<GetAllProductsResponseAdminView> {
        return this.http.get<GenericResponseView<GetAllProductsResponseAdminView>>('http://localhost:52994/api/admin/products/getAll').pipe(map(x=>x.model))
    }

    getById(productId: string):Observable<GetByIdProductsResponseAdminView> {
        return this.http.get<GenericResponseView<GetByIdProductsResponseAdminView>>('http://localhost:52994/api/admin/products/getById?productId=' + productId).pipe(map(x=>x.model))
    }

    delete(productId: string): Observable<void> {
        return this.http.delete<void>('http://localhost:52994/api/admin/products/delete?productId=' + productId);
    }

    update(model: UpdateProductsRequestAdminView): Observable<void> {
        return this.http.put<void>('http://localhost:52994/api/admin/products/update', model);
    }
}