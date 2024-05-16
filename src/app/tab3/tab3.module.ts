import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { RouterModule } from '@angular/router';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
    imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    ColorPickerModule,
    Tab3Page
]
})
export class Tab3PageModule {}
