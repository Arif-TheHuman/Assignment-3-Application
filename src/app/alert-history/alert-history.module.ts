import { AlertHistoryPageRoutingModule } from './alert-history-routing.module';
import { AlertHistoryPage } from './alert-history.page';
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
        AlertHistoryPageRoutingModule,
        AlertHistoryPage
    ]
})
export class AlertHistoryPageModule {}



