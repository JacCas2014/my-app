import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product: { id: number; name: string; price: number; description: string; } | undefined;

  // ActivatedRoute is specific to each component that the Angular Router loads
  // ActivatedRoutes contains info about the route and the route's params
  // By injecting ActivatedRoute here, the component is being configured to use a service
  constructor(private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    // the paramMap correspond to the path variable defined in the route
    // to access the route params use route.snapshot,
    // this is the ActivatedRouteSnapshot that contains info about the active route at that particular moment in time
    const routeParams =  this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
