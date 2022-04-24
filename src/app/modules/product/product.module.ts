import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GetPoductEffects } from './store/effects/get-poduct.effects';
import { CreatePoductEffects } from './store/effects/create-poduct.effects';
import { UpdatePoductEffects } from './store/effects/update-poduct.effects';
import { DeletePoductEffects } from './store/effects/delete-poduct.effects';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { MatModule } from 'src/app/shared/modules/mat/mat.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ProductFormComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      GetPoductEffects,
      CreatePoductEffects,
      UpdatePoductEffects,
      DeletePoductEffects,
    ]),
  ],
})
export class ProductModule {}
