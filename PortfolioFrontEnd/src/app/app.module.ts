import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArgProgramaComponent } from './components/arg-programa/arg-programa.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialsComponent } from './components/socials/socials.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ArgProgramaComponent,
    HeaderComponent,
    SocialsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
