import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pfpage2Page } from './pfpage2.page';

import { RouterModule } from '@angular/router';
import { Pfpage2PageRoutingModule } from './pfpage2-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
    imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Pfpage2PageRoutingModule,
    RouterModule.forChild([{ path: '', component: Pfpage2Page }]),
    ColorPickerModule,
    Pfpage2Page
]
})
export class Pfpage2PageModule {}
