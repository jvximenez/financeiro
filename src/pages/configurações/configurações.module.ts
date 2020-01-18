import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguraçõesPage } from './configurações';

@NgModule({
  declarations: [
    ConfiguraçõesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguraçõesPage),
  ],
})
export class ConfiguraçõesPageModule {}
