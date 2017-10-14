import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DGridModule } from 'angular2-dashboard-grid';

import { AppComponent } from './app.component';
import { GridService } from './app.shared/grid.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DGridModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
