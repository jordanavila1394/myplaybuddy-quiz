
import { Step } from '../../../models/Step';
import { createAction } from '@ngrx/store';

import { props } from '@ngrx/store';

export const setStep = createAction('[Steps Component] Change Step and Step List',
props<{ previousStep: string, currentStep: Step , stepList: Step[]}>()
);
