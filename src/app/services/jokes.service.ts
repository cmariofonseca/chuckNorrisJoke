import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/';

@Injectable()
export class JokesService {

  jokes: any = {};

  constructor(private http: Http) { }

  getJokes() {
    return this.http.get('http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris')
      .map(respuesta => {
        this.jokes = respuesta.json().value;
        console.log(this.jokes.joke);
      });
  }

}
