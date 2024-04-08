import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'pfpage2',
        loadChildren: () => import('../pfpage2/pfpage2.module').then(m => m.Pfpage2PageModule)
      },
      {
        path: 'aboutus',
        loadChildren: () => import('../aboutus/aboutus.module').then(m => m.AboutusPageModule)
      },
      {
        path: 'alert-history',
        loadChildren: () => import('../alert-history/alert-history.module').then(m => m.AlertHistoryPageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('../community/community.module').then(m => m.CommunityPageModule)
      },
      {
        path: 'community-eg',
        loadChildren: () => import('../community-eg/community-eg.module').then(m => m.CommunityEgPageModule)
      },
      {
        path: 'community-eg-post',
        loadChildren: () => import('../community-eg-post/community-eg-post.module').then(m => m.CommunityEgPostPageModule)
      },
      {
        path: 'community-update',
        loadChildren: () => import('../community-update/community-update.module').then(m => m.CommunityUpdatePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
