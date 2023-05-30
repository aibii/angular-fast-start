import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import {products as data, products} from './data/products'
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { FilterProductsPipe as filterProducts } from './pipes/filter-products.pipe';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root', //name of the component for the template
  templateUrl: './app.component.html', //link to template
  styleUrls: ['./app.component.css'] //link to styles
})
export class AppComponent {

  
}
