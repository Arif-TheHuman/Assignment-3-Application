import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-community-update',
    templateUrl: './community-update.page.html',
    styleUrls: ['./community-update.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class CommunityUpdatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
