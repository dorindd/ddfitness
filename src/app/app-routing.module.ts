import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestaComponent } from './allworkout/testa.component';
import { BpcalculatorComponent } from './bpcalculator/bpcalculator.component';



import { MainComponent } from './main/main.component';






const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', component: MainComponent, pathMatch: 'full' },
  {path:'bmi',component:BpcalculatorComponent},


  {
    path: 'selectday',
    loadChildren: () =>
      import('./selectday/selectday.module').then((m) => m.SelectdayModule),
  },

  {
    path: 'info',
    loadChildren: () =>
      import('./infores/infores.module').then((m) => m.InforesModule),
  },

  {path:'personaltr',loadChildren:()=>import('./personaltr/personaltr.module').then((m)=>m.PersonaltrModule)},
  {path:'testa',component:TestaComponent,loadChildren:()=>import('./allworkout/allworkout.module').then((m)=>m.AllworkoutModule)},
  {path:'homeinfo',loadChildren:()=>import('./homeinfo/homeinfo.module').then((m)=>m.HomeinfoModule)},
  {path:'form',loadChildren:()=>import('./form/form.module').then((m)=>m.FormModule)},
  {path:'thanks',loadChildren:()=>import('./thanks/thanks.module').then((m)=>m.ThanksModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
