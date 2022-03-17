import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlvTitleModule } from '../../../shared-components/src/lib/title/title.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlvTitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
