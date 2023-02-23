import { Component } from '@angular/core';
import { StepsState } from "../../../../stores/steps/steps.reducer";
import { ResultState } from "../../../../stores/result/result.reducer";

//Store
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Step } from 'src/models/Step';
import { setStep } from 'src/app/stores/steps/steps.actions';

import { Router  } from '@angular/router';

//service
import { ProductsService } from '../../../../services/products/products.service';
import { setProductsList } from 'src/app/stores/result/result.actions';


@Component({
  selector: 'app-quiz-steps',
  templateUrl: './quiz-steps.component.html',
  styleUrls: ['./quiz-steps.component.scss']
})
export class QuizStepsComponent {

  stepsState$: Observable<StepsState>;
  resultState$: Observable<ResultState>;

  currentStepList!: Step[];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private store: Store<{ stepsState: StepsState, resultState: ResultState}>,

  ) {
    this.stepsState$ = store.select("stepsState");
    this.resultState$ = store.select("resultState");

  }
  ngOnInit(): void {

    this.stepsState$.subscribe((stepsS) => {
      this.currentStepList = stepsS.stepList;
    });

    // this.onChanges();
    this.changeStep("","0");
  }

  saveSurveyParams() {
    throw new Error('Method not implemented.');
  }
  searchProducts(idStep: string): void {
    const id = this.getIdCategoryByStep(idStep);
    let dataProducts: any []= [];
    const request = {
      id
    }
    this.productsService.getCategoryById(request).subscribe((data) =>
    {
        this.store.dispatch(setProductsList({ productsList: data.psdata}));
        this.router.navigate(['/result']);
    });

  }

  getIdCategoryByStep (idStep: string){
    let categoryId;
    //ANO
    if(idStep =='ACA'){
      categoryId = '132';
    }
    if(idStep =='ACB'){
      categoryId = '177';
    }
    if(idStep =='ACC'){
      categoryId = '236';
    }

    return categoryId
  }

  changeStep(previousStep:string, idStep: string): void {
    const tempStepsList = this.currentStepList.map((tStep: any) => {
      tStep = { ...tStep, isActive: false};

      return tStep;
    });

    const nextStep = tempStepsList.find((tStep: any) => tStep.id === idStep);
    let index = 0;
    if (nextStep) {
      index = tempStepsList.map((tStep: any) => tStep.id).indexOf(nextStep?.id);
    }

    if (nextStep) {
      nextStep.isActive = true;
      tempStepsList[index] = nextStep;
      console.log("tempStepsList ",tempStepsList);

      this.store.dispatch(
        setStep({ previousStep:previousStep, currentStep: nextStep, stepList: tempStepsList })
      );
    }
  }

}
