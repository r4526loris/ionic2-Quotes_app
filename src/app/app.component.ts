import { Component ,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {NavController,MenuController} from "ionic-angular";

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  private tabsPage = TabsPage;
  private settingsPage = SettingsPage;
  
  @ViewChild('nav') nav:NavController;

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  constructor(
    private menuCtrl:MenuController,
    platform: Platform
  ){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
