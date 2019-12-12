import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../service/spotify.service';
import { CurrentSongPage } from 'src/app/pages/current-song/current-song.page';
import { SongsViewComponent } from 'src/app/components/songs-view/songs-view.component';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    private router: Router,
    private http: HttpClient,
    private spotifyService: SpotifyService,
  ) { }
  genreImages: string[] = [];
  genres: string[] = [];
  public GenreArr: Genre[] = [];
  playingSongRoute;
  name;
  image;
  artist;
  id;

  playingPlaylistRoute;
  playlistImage;
  playlistGenre;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.spotifyService.getAllGenres().subscribe((response: any) => {
      if (response) {
        this.genres = response.genres;
        this.genres.forEach(element => {
          this.spotifyService.getGenreImages(element).subscribe((res: any) => {
            if (res) {
              const url = res.playlists.items[0].images[0].url;

              this.genreImages.push(url as string);
              const newGenre = new Genre(element, url);
              this.GenreArr.push(newGenre);
            } else {
              this.genreImages = [];
            }
            console.log(this.genreImages);
            console.log(this.GenreArr);
          });
        });
      } else {
        this.genres = [];
      }
    });
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

  favorites() {
    this.router.navigate(['favorites']);
  }
  getSongUrl() {
    if (CurrentSongPage.playingSongUrl != null && CurrentSongPage.playingSongUrl != {} && CurrentSongPage.playingSongUrl != []) {
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
}
class Genre {
  label: string;
  img: string;
  constructor(label, img) {
    this.img = img;
    this.label = label;
  }
}
