import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllworkoutRoutingModule } from './allworkout-routing.module';
import { WorkoneComponent } from './workone/workone.component';
import { WorktwoComponent } from './worktwo/worktwo.component';
import { WorkthreeComponent } from './workthree/workthree.component';
import { NavpilatesModule } from '../navpilates/navpilates.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { TimerModule } from '../timer/timer.module';
import { FooterModule } from '../footer/footer.module';
import { TestaComponent } from './testa.component';




@NgModule({
  declarations: [
    WorkoneComponent,
    WorktwoComponent,
    WorkthreeComponent,
    TestaComponent

  ],
  imports: [
    CommonModule,
    AllworkoutRoutingModule,
    NavpilatesModule,
    MatExpansionModule,
    TimerModule,
    FooterModule,




  ],
  exports:[WorkoneComponent,WorktwoComponent,WorkthreeComponent],
})
export class AllworkoutModule { }
