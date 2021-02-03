import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

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
  // @Input() decorator indicates the property value is passed in from the component's parent, in this case the ProductListComponent
  @Input() product: any;

  // notify is a property
  // @Output decorator emits an event when the notify property changes
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
