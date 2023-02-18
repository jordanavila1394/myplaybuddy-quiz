import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const setProductsList = createAction('[Result Store] Set Product list',
    props<{ productsList: any[]}>()
);
