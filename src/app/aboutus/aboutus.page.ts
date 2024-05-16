import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.page.html',
    styleUrls: ['./aboutus.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class AboutusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
