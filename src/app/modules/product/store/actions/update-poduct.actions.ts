import { createAction, props } from '@ngrx/store';

export const UpdatePoducts = createAction(
  '[UpdatePoduct]  UpdatePoducts'
);

export const UpdatePoductsSuccess = createAction(
  '[UpdatePoduct]  UpdatePoducts Success',
  props<{ data: any }>()
);

export const UpdatePoductsFailure = createAction(
  '[UpdatePoduct]  UpdatePoducts Failure',
  props<{ error: any }>()
);
