import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertHistoryPage } from './alert-history.page';

const routes: Routes = [
  {
    path: '',
    component: AlertHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertHistoryPageRoutingModule {}
