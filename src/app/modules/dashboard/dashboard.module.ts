import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MatModule } from 'src/app/shared/modules/mat/mat.module';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./../product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./../order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'sattlements',
        loadChildren: () =>
          import('./../sattlement/sattlement.module').then(
            (m) => m.SattlementModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./../category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'app-home',
        loadChildren: () =>
          import('./../app-home/app-home.module').then((m) => m.AppHomeModule),
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./../offers/offers.module').then((m) => m.OffersModule),
      },
    ],
  },
];

@NgModule({
  declarations: [NavComponent, DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatModule,
  ],
})
export class DashboardModule {}
