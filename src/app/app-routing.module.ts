import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'music' , component: MusicComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
