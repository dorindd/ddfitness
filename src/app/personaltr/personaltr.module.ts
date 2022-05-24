import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaltrRoutingModule } from './personaltr-routing.module';
import { TrainerComponent } from './trainer/trainer.component';


@NgModule({
  declarations: [
    TrainerComponent
  ],
  imports: [
    CommonModule,
    PersonaltrRoutingModule
  ],
  exports:[TrainerComponent]
})
export class PersonaltrModule { }
