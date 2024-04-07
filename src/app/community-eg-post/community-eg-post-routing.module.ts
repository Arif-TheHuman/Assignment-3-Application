import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityEgPostPage } from './community-eg-post.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityEgPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityEgPostPageRoutingModule {}
