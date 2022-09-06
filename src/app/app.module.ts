import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar para hacer uso de http en los demas componentes
import {  HttpClientModule } from '@angular/common/http';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TargetsComponent } from './components/targets/targets.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//IMPORTANTE: En esta version de angular no se declaran las rutas en este archivo


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    TargetsComponent,
    LoadingComponent,
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
