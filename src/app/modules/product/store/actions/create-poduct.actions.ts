import { createAction, props } from '@ngrx/store';

export const CreatePoducts = createAction('[CreatePoduct]  CreatePoducts');

export const CreatePoductsSuccess = createAction(
  '[CreatePoduct]  CreatePoducts Success',
  props<{ data: any }>()
);

export const CreatePoductsFailure = createAction(
  '[CreatePoduct]  CreatePoducts Failure',
  props<{ error: any }>()
);
