//Angular
import { Component } from "@angular/core";

import { FormBuilder } from "@angular/forms";

//Models
import { Company } from "../../../../../models/Company";
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { ResultState } from "src/app/stores/result/result.reducer";

@Component({
  selector: "app-result-home",
  templateUrl: "./quiz-result.component.html",
  styleUrls: ["./quiz-result.component.scss"],

})
export class QuizResultComponent {
  currentProducts: any;


  resultState$: Observable<ResultState>;

  //Constructor
  constructor(
    public fb: FormBuilder,
    private store: Store<{ resultState: ResultState }>)
    {
    this.resultState$ = store.select('resultState');

  }

  // On Component Initialized
  ngOnInit(): void {
    this.resultState$.subscribe(resultS =>{
      console.log(resultS?.productsList?.products);
      this.currentProducts = resultS?.productsList?.products;
    }
    );
  }

}

