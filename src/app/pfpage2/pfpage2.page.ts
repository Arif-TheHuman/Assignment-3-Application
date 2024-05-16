import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-pfpage2',
    templateUrl: './pfpage2.page.html',
    styleUrls: ['./pfpage2.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class Pfpage2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
