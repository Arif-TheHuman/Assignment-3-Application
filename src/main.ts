import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, IonicModule.forRoot(), ColorPickerModule),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"furfriends-6d36e","appId":"1:189224469306:web:bb01d746a6cc0cbb954603","storageBucket":"furfriends-6d36e.appspot.com","apiKey":"AIzaSyBjFHrpRxXIOnqfL54blMoFZY2MOqLqo58","authDomain":"furfriends-6d36e.firebaseapp.com","messagingSenderId":"189224469306"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
    ]
})
  .catch(err => console.log(err));
