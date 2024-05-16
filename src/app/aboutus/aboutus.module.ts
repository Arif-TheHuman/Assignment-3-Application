import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutusPage } from './aboutus.page';

import { RouterModule } from '@angular/router';
import { AboutusPageRoutingModule } from './aboutus-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutusPageRoutingModule,
        AboutusPage
    ]
})
export class AboutusPageModule {}



