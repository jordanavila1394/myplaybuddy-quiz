//Angular
import { Component } from "@angular/core";

import { FormBuilder } from "@angular/forms";

//Models
import { Company } from "../../../../../models/Company";


@Component({
  selector: "app-quiz-home",
  templateUrl: "./quiz-home.component.html",
  styleUrls: ["./quiz-home.component.scss"],

})
export class QuizHomeComponent {



  //Constructor
  constructor(
    public fb: FormBuilder,

  ) {
  }

  // On Component Initialized
  ngOnInit(): void {

  }


  onChangeSavePriority(priority: string, company: Company) {


  }


}

