import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { SlotmanagePage } from '../pages/slotmanage/slotmanage'
import { ItemDetailsPage } from '../pages/item-details/item-details'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'รายการของ', component: HelloIonicPage },
      { title: 'ช่องเก็บของ', component: SlotmanagePage },
      { title: 'ออกจากระบบ', component: LogoutPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if (LoginPage.IsLoggedIn()) {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  }
}
