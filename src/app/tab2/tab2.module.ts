import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

// import { Ionicons } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';

import { Tab2PageRoutingModule } from './tab2-routing.module';

export default {
  // components: {
  //   Ionicons
  // },
  data() {
    return {
      arrowForward: arrowForward
    }
  }
}

@NgModule({
    imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    Tab2Page
]
})
export class Tab2PageModule {}
