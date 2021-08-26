import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;

    this.activatedRoute.params.subscribe(params => {
      this.verArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  verArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}
