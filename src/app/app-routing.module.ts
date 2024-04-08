import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'alert-history',
    loadChildren: () => import('./alert-history/alert-history.module').then( m => m.AlertHistoryPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'community-eg',
    loadChildren: () => import('./community-eg/community-eg.module').then( m => m.CommunityEgPageModule)
  },
  {
    path: 'community-eg-post',
    loadChildren: () => import('./community-eg-post/community-eg-post.module').then( m => m.CommunityEgPostPageModule)
  },
  {
    path: 'community-update',
    loadChildren: () => import('./community-update/community-update.module').then( m => m.CommunityUpdatePageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
