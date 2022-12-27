 /*
* File: app.app-routing
* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2022-12-27
* Github: https://github.com/megyerimark
*/




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  {path: "storage", component:StorageComponent},
  {path: "git", component:GitComponent},
  {path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
