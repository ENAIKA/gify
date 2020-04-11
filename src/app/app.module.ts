import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
// import { from } from 'rxjs';
import { GifyComponent } from './gify/gify.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { GifSearchComponent } from './gif-search/gif-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GifyComponent,
    NotFoundComponent,
    NavBarComponent,
    SearchGifsComponent,
    GifSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
