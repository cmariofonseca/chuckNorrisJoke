import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ChuckNorrisComponent } from './components/chuck-norris/chuck-norris.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

// Services:
import { JokesService } from './services/jokes.service';


@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    JokesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
