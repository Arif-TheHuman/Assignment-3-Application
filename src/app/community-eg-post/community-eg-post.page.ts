import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-community-eg-post',
    templateUrl: './community-eg-post.page.html',
    styleUrls: ['./community-eg-post.page.scss'],
    standalone: true,
    imports: [IonicModule, RouterLink],
})
export class CommunityEgPostPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
