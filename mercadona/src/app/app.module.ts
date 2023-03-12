import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    TableComponent,
    FooterComponent,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
