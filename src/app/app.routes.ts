import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'TabsPage',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
  },
  {
    path: '',
    redirectTo: 'TabsPage',
    pathMatch: 'full'
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./aboutus/aboutus.page').then(m => m.AboutusPage),
  },
  {
    path: 'alert-history',
    loadComponent: () => import('./alert-history/alert-history.page').then(m => m.AlertHistoryPage),
  },
  {
    path: 'community',
    loadComponent: () => import('./community/community.page').then(m => m.CommunityPage),
  },
  {
    path: 'community-eg',
    loadComponent: () => import('./community-eg/community-eg.page').then(m => m.CommunityEgPage),
  },
  {
    path: 'community-eg-post',
    loadComponent: () => import('./community-eg-post/community-eg-post.page').then(m => m.CommunityEgPostPage),
  },
  {
    path: 'community-update',
    loadComponent: () => import('./community-update/community-update.page').then(m => m.CommunityUpdatePage),
  },

]

