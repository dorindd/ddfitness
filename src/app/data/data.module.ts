import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigdataComponent } from './bigdata/bigdata.component';

import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [BigdataComponent],
  imports: [CommonModule, FormsModule],
  exports: [BigdataComponent],
})
export class DataModule {}
