import { CommunityPageRoutingModule } from './community-routing.module';
import { CommunityPage } from './community.page';
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
        CommunityPageRoutingModule,
        CommunityPage
    ]
})
export class CommunityPageModule {}



