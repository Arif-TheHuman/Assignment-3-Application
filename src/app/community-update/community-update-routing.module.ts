import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityUpdatePage } from './community-update.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityUpdatePageRoutingModule {}
