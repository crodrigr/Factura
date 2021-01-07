import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }      from  './app-routing.module';
import { AppComponent }          from  './app.component';
import { HeaderComponent }       from  './components/componentes/header/header.component';
import { FooterComponent }       from  './components/componentes/footer/footer.component';
import { ClientListComponent }   from  './components/client/client-list.component';
import { ClientFormComponent }   from  './components/client/client-form.component';
import { ClientDetailComponent } from './components/client/client-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    ClientFormComponent,
    ClientDetailComponent
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
