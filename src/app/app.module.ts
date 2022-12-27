
 /*
* File: app.module
* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2022-12-27
* Github: https://github.com/megyerimark
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StorageComponent } from './storage/storage.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StorageComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
