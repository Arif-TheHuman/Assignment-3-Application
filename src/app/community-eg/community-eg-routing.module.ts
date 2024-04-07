import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityEgPage } from './community-eg.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityEgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityEgPageRoutingModule {}
