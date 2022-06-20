import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetPageComponent } from './components/planet-page/planet-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetPageComponent,
    PageNotFoundComponent,
    PlanetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
