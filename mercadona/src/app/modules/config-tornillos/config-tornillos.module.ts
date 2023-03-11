import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigTornillosComponent } from './config-tornillos.component';
import { TableComponent } from 'src/app/components/table/table.component';


@NgModule({
  declarations: [
    ConfigTornillosComponent
  ],
  imports: [
    CommonModule,
    TableComponent
  ]
})
export class ConfigTornillosModule { }
