import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-community-eg',
    templateUrl: './community-eg.page.html',
    styleUrls: ['./community-eg.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class CommunityEgPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
