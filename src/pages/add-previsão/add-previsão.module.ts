import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPrevisãoPage } from './add-previsão';

@NgModule({
  declarations: [
    AddPrevisãoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPrevisãoPage),
  ],
})
export class AddPrevisãoPageModule {}
