import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
// import { Ionicons } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';

import { Tab1PageRoutingModule } from './tab1-routing.module';

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
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
