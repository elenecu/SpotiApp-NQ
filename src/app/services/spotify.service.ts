import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('El servicio funciona!')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCmq4excqtQSLwgGN6cgUUz93rbsFg_1henhN9kUu48aaXMYcfsFIcdyqr40qHukzpJSrmvR2QJhXEVDgE'
    });

    return this.http.get(url, { headers });
  }

  getNewReleasese() {

    return this.getQuery('browse/new-releases?limit=50')
      .pipe(map((data: any) => data['albums'].items));

  }


  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe(map((data: any) => data['tracks']));

  }

}
