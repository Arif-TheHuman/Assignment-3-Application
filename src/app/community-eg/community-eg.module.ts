import { CommunityEgPageRoutingModule } from './community-eg-routing.module';
import { CommunityEgPage } from './community-eg.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommunityEgPageRoutingModule,
        CommunityEgPage
    ]
})
export class  CommunityEgPageModule {}



