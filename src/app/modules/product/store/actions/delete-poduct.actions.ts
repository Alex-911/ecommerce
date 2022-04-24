import { createAction, props } from '@ngrx/store';

export const DeletePoducts = createAction(
  '[DeletePoduct]  DeletePoducts'
);

export const DeletePoductsSuccess = createAction(
  '[DeletePoduct]  DeletePoducts Success',
  props<{ data: any }>()
);

export const DeletePoductsFailure = createAction(
  '[DeletePoduct]  DeletePoducts Failure',
  props<{ error: any }>()
);
