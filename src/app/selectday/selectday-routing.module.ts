import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { FridayComponent } from './friday/friday.component';
import { MondayComponent } from './monday/monday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SundayComponent } from './sunday/sunday.component';
import { ThursdayComponent } from './thursday/thursday.component';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';

const routes: Routes = [
  {path:'monday',component:MondayComponent},
  {path:'tuesday',component:TuesdayComponent},
  {path:'wednesday',component:WednesdayComponent},
  {path:'thursday',component:ThursdayComponent},
  {path:'friday',component:FridayComponent},
  {path:'saturday',component:SaturdayComponent},
  {path:'sunday',component:SundayComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class SelectdayRoutingModule {}
