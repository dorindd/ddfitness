import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfohomeComponent } from './infohome/infohome.component';

const routes: Routes = [
  {path:'infohome',component:InfohomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeinfoRoutingModule { }
