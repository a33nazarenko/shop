export class GetAllProductResponseAdminViewItem {
    productId: string;
    title: string;
    price: number;
    description: string;
    image: string;
}

export class GetAllProductsResponseAdminView {
    products: Array<GetAllProductResponseAdminViewItem>;

    constructor() {
        this.products = [];
    }
}