import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityUpdatePageRoutingModule } from './community-update-routing.module';

import { CommunityUpdatePage } from './community-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityUpdatePageRoutingModule
  ],
  declarations: [CommunityUpdatePage]
})
export class CommunityUpdatePageModule {}
