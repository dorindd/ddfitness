import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TanksyouComponent } from './tanksyou/tanksyou.component';

const routes: Routes = [
  {path:'you',component:TanksyouComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThanksRoutingModule { }
