import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { ListbooksComponent } from './listbooks/listbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookaddComponent,
    ListbooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
