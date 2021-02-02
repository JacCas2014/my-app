import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// @Component() decorator indicates the class is a component
// @Component provides metadata about the component:
// selector - identifies the component (convention prefix app- followed by component name)
// templateUrl - the component's HTML
// styleUrls - the component's CSS
// @Component also exports the class ProductAlertsComponent which handles functionality for the component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.sass']
})
export class ProductAlertsComponent implements OnInit {
  // product is a property
  // @Input() decorator indicates the property value is passed in from the component's parent, ProductListComponent
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
