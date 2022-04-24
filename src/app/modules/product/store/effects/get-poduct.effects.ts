import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class GetPoductEffects {
  constructor(private actions$: Actions) {}
}
