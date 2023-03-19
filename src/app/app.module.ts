import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
