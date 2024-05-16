import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-alert-history',
    templateUrl: './alert-history.page.html',
    styleUrls: ['./alert-history.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class AlertHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
