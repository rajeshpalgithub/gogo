import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {SideMenuPage} from '../pages/side-menu/side-menu';


import {LoginStateProvider} from '../providers/login-state/login-state';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any ;
  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private loginSate:LoginStateProvider) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
      this.statusBar.styleDefault();
      this.setRootPage();
      this.splashScreen.hide();
    });
  }
  
  setRootPage()
  {
    if(this.loginSate.loginState)
    {
      
      this.rootPage = HomePage;
      
    }else{
      this.rootPage = LoginPage;
    }
  }

 /* openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/
}
