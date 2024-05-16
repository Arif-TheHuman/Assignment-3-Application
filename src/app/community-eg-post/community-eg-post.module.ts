import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommunityEgPostPageRoutingModule } from './community-eg-post-routing.module';
import { CommunityEgPostPage } from './community-eg-post.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommunityEgPostPageRoutingModule,
        CommunityEgPostPage
    ]
})
export class CommunityEgPostPageModule {}




