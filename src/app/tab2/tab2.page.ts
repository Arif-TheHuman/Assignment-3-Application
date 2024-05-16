import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    standalone: true,
    imports: [ExploreContainerComponent, IonicModule, RouterLink, NgStyle, FormsModule]
})
export class Tab2Page {
  emailChecked = false;
  alarmChecked = false;
  pushNotiChecked = true;
  SMSChecked = true;
  callChecked = true;
  todDetection = true;
  sensorNO = true;
  Date = true;
  picture = true;

  // ...
}