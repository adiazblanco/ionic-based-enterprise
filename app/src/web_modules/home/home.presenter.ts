import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HomeInteractor } from './home.interactor';
import { HomeViewInterface } from './home.model';

@Component({
  selector: 'page-home',
  templateUrl: './home.html',
  viewProviders: [HomeInteractor]
})
export class HomePresenter implements OnInit {

  public homeInfo: Observable<HomeViewInterface>;

  constructor(
    public navCtrl: NavController,
    public interactor: HomeInteractor
    ) {
  }

  ngOnInit() {
    this.homeInfo = this.interactor.getHomeInfo();
  }

}
