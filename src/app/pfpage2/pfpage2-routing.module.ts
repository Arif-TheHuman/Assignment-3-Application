import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pfpage2Page } from './pfpage2.page';

const routes: Routes = [
  {
    path: '',
    component: Pfpage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pfpage2PageRoutingModule {}
