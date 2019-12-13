import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrentSongPage } from '../current-song/current-song.page';
import { SongsViewComponent } from '../../components/songs-view/songs-view.component';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  providers: [SpotifyService]
})
export class SongsPage implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router: Router) {}
  static tracks: any = [];
  genre: string;
  genreImage: string;
  public data: any = [];
  playingSongRoute;
  name;
  image;
  artist;
  id;

  playingPlaylistRoute;
  playlistImage;
  playlistGenre;

   ngOnInit() {
    this.route.queryParams

    .subscribe(params => {
      this.genre = params.g;
      this.genreImage = params.img;
    });


    this.spotifyService
      .searchMusic(this.genre)
      .subscribe((response: any) => {

        if (response) {
          this.data = response.tracks;
          SongsPage.tracks = response.tracks;
        } else {
          this.data = [];
        }
        console.log(this.data);
      });
  }

  home() {
    this.router.navigate(['home']);
  }

  favorites() {
    this.router.navigate(['favorites']);
  }
 public getCurrentGenre(): any {
return this.genre;
  }
  public getCurrentGenreImg(): any {
return this.genreImage;
  }

  getSongUrl() {
    if (CurrentSongPage.playingSongUrl != null && CurrentSongPage.playingSongUrl !== {}  && CurrentSongPage.playingSongUrl !== []) {
      this.playingSongRoute = CurrentSongPage.playingSongUrl;
      console.log(this.playingSongRoute);
      this.image = this.playingSongRoute.image;
      this.name = this.playingSongRoute.name;
      this.artist = this.playingSongRoute.artist;
      this.id = this.playingSongRoute.id;
      console.log(this.image);
      this.router.navigate(['current-song'], {
      queryParams: {
        image: this.image,
        name: this.name,
        artist: this.artist,
        id: this.id
      }
    });
  }
  }

  getCurrentPlaylist() {
    if (SongsViewComponent.currentPlaylistUrl != null && SongsViewComponent.currentPlaylistUrl !== {}  
      && SongsViewComponent.currentPlaylistUrl !== []) {
      this.playingPlaylistRoute = SongsViewComponent.currentPlaylistUrl;
      console.log(this.playingPlaylistRoute);
      this.playlistImage = this.playingPlaylistRoute.img;
      this.playlistGenre = this.playingPlaylistRoute.g;
      this.router.navigate(['songs'], {
      queryParams: {
        img: this.playlistImage,
        g: this.playlistGenre,
      }
    });
  }
  }
}
