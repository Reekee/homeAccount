import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.page.html',
    styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
    private product_id;
    constructor(
        private route: ActivatedRoute
    ) {
        this.product_id = this.route.snapshot.paramMap.get("product_id");
    }
    ngOnInit() {
    }
}
