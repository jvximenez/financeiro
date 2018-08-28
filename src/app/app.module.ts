import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule} from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { EditPage } from '../pages/edit/edit';
import { ConfiguraçõesPage } from '../pages/configura\u00E7\u00F5es/configura\u00E7\u00F5es';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPage,
    ConfiguraçõesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCS77TuCe2jrXqmSDh9Ivs7gWedPM7PJ3E",
      authDomain: "ionic3-gastos-45fd4.firebaseapp.com",
      databaseURL: "https://ionic3-gastos-45fd4.firebaseio.com",
      projectId: "ionic3-gastos-45fd4",
      storageBucket: "ionic3-gastos-45fd4.appspot.com",
      messagingSenderId: "404912444334"
    }

    ),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPage,
    ConfiguraçõesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastServiceProvider
  ]
})
export class AppModule {}
