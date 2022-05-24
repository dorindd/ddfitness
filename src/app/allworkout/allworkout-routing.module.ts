import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoneComponent } from './workone/workone.component';
import { WorkthreeComponent } from './workthree/workthree.component';
import { WorktwoComponent } from './worktwo/worktwo.component';


const routes: Routes = [
  {path:'workone',component:WorkoneComponent},
  {path:'worktwo',component:WorktwoComponent},
  {path:'workthree',component:WorkthreeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllworkoutRoutingModule { }
