import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePresenter } from '../web_modules/home/home.presenter';
import { AppInteractor } from './app.interactor';

@Component({
  templateUrl: 'app.html',
  viewProviders: [AppInteractor]
})
export class App {
  public rootPage: Component = <Component> HomePresenter;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public appInteractor: AppInteractor
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

