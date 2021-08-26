import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }

  buscar(termino: string) {
    this.loading = true;

    if (termino.length === 0) {
      this.loading = false
    } else {
      this.spotify.getArtistas(termino)
        .subscribe((data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        })
    }

  }

}
