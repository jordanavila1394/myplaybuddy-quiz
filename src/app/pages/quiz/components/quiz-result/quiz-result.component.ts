//Angular
import { Component } from "@angular/core";

import { FormBuilder } from "@angular/forms";

//Models
import { Company } from "../../../../../models/Company";
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { ResultState } from "src/app/stores/result/result.reducer";
import { ProductsService } from "src/app/services/products/products.service";
import { setProductsList } from "src/app/stores/result/result.actions";

@Component({
  selector: "app-result-home",
  templateUrl: "./quiz-result.component.html",
  styleUrls: ["./quiz-result.component.scss"],

})
export class QuizResultComponent {

  currentProducts: any;
  currentPagination: any;


  resultState$: Observable<ResultState>;
  currentTotalProducts: any;

  //Constructor
  constructor(
    private productsService: ProductsService,
    public fb: FormBuilder,
    private store: Store<{ resultState: ResultState }>)
    {
    this.resultState$ = store.select('resultState');

  }

  // On Component Initialized
  ngOnInit(): void {
    this.resultState$.subscribe(resultS =>{
      this.currentProducts = resultS?.productsList?.products;
      this.currentTotalProducts = resultS?.productsList?.pagination?.total_items;
      this.currentPagination = formatPagination(resultS?.productsList?.pagination);
    }
    );
  }
  onClickChangePage(url: any) {
    this.productsService.getCategoryByUrl(url).subscribe((data: any) =>
    {
        this.store.dispatch(setProductsList({ productsList: data.psdata}));
    });
    window.scrollTo(0, 0);

  }
}


function formatPagination(pagination: any): any {
  let arrayPagination: any[]= [];

  for (let key in pagination.pages) {
    arrayPagination.push(pagination.pages[key]);
  }
  return arrayPagination;
}

