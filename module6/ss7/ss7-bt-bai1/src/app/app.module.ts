import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryDetailComponent } from './conponent/dictionary-detail/dictionary-detail.component';
import { DictionayPageComponent } from './conponent/dictionay-page/dictionay-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryDetailComponent,
    DictionayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
