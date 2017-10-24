import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit {

  constructor(public js: JokesService) { }

  ngOnInit() {
    this.setJokesSlide();
    setInterval(() => {
      this.setJokesSlide();
    }, 5000);
  }

  setJokesSlide() {
    this.js.getJokes().subscribe();
  }

}
