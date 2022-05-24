import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { MatNativeDateModule } from '@angular/material/core';

import { DataModule } from './data/data.module';
import { BpcalculatorComponent } from './bpcalculator/bpcalculator.component';

import { HeaderModule } from './header/header.module';
import { TopnavbarModule } from './topnavbar/topnavbar.module';
import { AdvertModule } from './advert/advert.module';
import { PersonaltrModule } from './personaltr/personaltr.module';
import { TextModule } from './text/text.module';
import { TwocompComponent } from './twocomp/twocomp.component';
import { TexttwoModule } from './texttwo/texttwo.module';
import { AthomeModule } from './athome/athome.module';
import { MotivatedModule } from './motivated/motivated.module';
import { FooterModule } from './footer/footer.module';
import { TimetableModule } from './timetable/timetable.module';
import { MyscheduleModule } from './myschedule/myschedule.module';
import { ThanksModule } from './thanks/thanks.module';




















@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BpcalculatorComponent,
    TwocompComponent,
  







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatNativeDateModule,
    DataModule,
    HeaderModule,
 TopnavbarModule,
    AdvertModule,
    PersonaltrModule,
    TextModule,
    TexttwoModule,
    AthomeModule,
    MotivatedModule,
    FooterModule,
    TimetableModule,
    MyscheduleModule,
    ThanksModule






  ],

  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {}
