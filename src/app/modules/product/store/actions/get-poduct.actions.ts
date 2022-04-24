import { createAction, props } from '@ngrx/store';

export const GetPoducts = createAction(
  '[GetPoduct]  GetPoducts'
);

export const GetPoductsSuccess = createAction(
  '[GetPoduct]  GetPoducts Success',
  props<{ data: any }>()
);

export const GetPoductsFailure = createAction(
  '[GetPoduct]  GetPoducts Failure',
  props<{ error: any }>()
);
