import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { HomePresenter } from './home.presenter';

@NgModule({
  imports: [
    IonicPageModule.forChild(HomePresenter),
    CommonModule,
    IonicModule,
  ],
  entryComponents: [
    HomePresenter
  ],
  declarations: [
    HomePresenter
  ]
})
export class HomeModule { }