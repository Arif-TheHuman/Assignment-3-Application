import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-community',
    templateUrl: './community.page.html',
    styleUrls: ['./community.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class CommunityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
