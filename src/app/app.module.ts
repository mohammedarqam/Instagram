import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/MainTabs/home/home';
import { TabsPage } from '../pages/Extra/tabs/tabs';
import { AddPage } from '../pages/MainTabs/add/add';
import { ExplorePage } from '../pages/MainTabs/explore/explore';
import { FavPage } from '../pages/MainTabs/fav/fav';
import { ProfilePage } from '../pages/MainTabs/profile/profile';
import { MessagingPage } from '../pages/Modules/messaging/messaging';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

export const firebaseCred = {
  apiKey: "AIzaSyAHaDcVrvJas3CeDGfXIqH9TdnP-6StPqc",
  authDomain: "instagram-dda96.firebaseapp.com",
  databaseURL: "https://instagram-dda96.firebaseio.com",
  projectId: "instagram-dda96",
  storageBucket: "instagram-dda96.appspot.com",
  messagingSenderId: "1026780017300"
};
firebase.initializeApp(firebaseCred);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AddPage,
    ExplorePage,
    FavPage,
    ProfilePage,
    MessagingPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddPage,
    ExplorePage,
    FavPage,
    ProfilePage,
    MessagingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
