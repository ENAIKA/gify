import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GifyComponent}from './gify/gify.component';
import {NotFoundComponent}from './not-found/not-found.component'
import {SearchGifsComponent} from './search-gifs/search-gifs.component';
const routes: Routes = [
  {path: 'trending_gif' ,component:GifyComponent},
  { path:'trending_sticker', component:SearchGifsComponent},
  { path: '', redirectTo:'/trending_gif', pathMatch:'full'},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
