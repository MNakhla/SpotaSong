import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsViewComponent } from 'src/app/components/songs-view/songs-view.component';
import { SpotifyService } from 'src/app/service/spotify.service'
import { SongsPage } from '../songs/songs.page';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.page.html',
  styleUrls: ['./current-song.page.scss'],
})
export class CurrentSongPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private SpotifyService: SpotifyService) { }
  static favoritesNames = [];
  static playingSongUrl: any;
  image: any;
  name: string;
  artist: string;
  id;
  like = false;
  playingPlaylistRoute;
  playlistImage;
  playlistGenre;
  playButton = false;
  audio = SongsViewComponent.audio;
  duration;



  ngOnInit() {

    this.SpotifyService.getFavouritListt().subscribe(data => {
      CurrentSongPage.favoritesNames = data.ids;
      console.log(CurrentSongPage.favoritesNames);
    }, err => {
      alert(JSON.stringify(err))
    });

    this.route.queryParams
      .subscribe(params => {
        this.image = params.image;
        this.name = params.name;
        this.artist = params.artist;
        this.id = params.id;
        CurrentSongPage.playingSongUrl = this.route.snapshot.queryParams;
        console.log(CurrentSongPage.playingSongUrl);
        console.log(this.image);
        console.log('hiiii' + this.audio.duration);
        this.duration = this.audio.duration;
      });
  }
  getHeart() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < CurrentSongPage.favoritesNames.length; i++) {
      if (CurrentSongPage.favoritesNames[i] === this.id) {
        return true;
      }
    }
    return false;

  }
  async toggleColor() {
    let f = false;
    for (let i = 0; i < CurrentSongPage.favoritesNames.length; i++) {
      if (CurrentSongPage.favoritesNames[i] === this.id) {
        f = true;
        this.like = false;
        await CurrentSongPage.favoritesNames.splice(i, 1);
        await this.SpotifyService.addFavouritList(CurrentSongPage.favoritesNames, "ids").subscribe(data => {
        }, err => {
          alert(JSON.stringify(err))
        });
      }
    }
    if (!f) {
      this.like = true;
      await CurrentSongPage.favoritesNames.push(this.id);
      await this.SpotifyService.addFavouritList(CurrentSongPage.favoritesNames, "ids").subscribe(data => {
      }, err => {
        alert(JSON.stringify(err))
      });
    }
    console.log(CurrentSongPage.favoritesNames);
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


  pause() {
    SongsViewComponent.audio.pause();
    this.playButton = true;
  }
  play() {
    SongsViewComponent.audio.play();
    this.playButton = false;
  }

  back() {
    for (let i = 0; i < SongsPage.tracks.length; i++) {
      if (SongsPage.tracks[i].id === this.id) {
        i--;
        for (let j = 0; SongsPage.tracks[i].preview_url === null; j++) {
          i--;
          if (i < 0) {
            i = SongsPage.tracks.length - 1;
          }
        }
        this.router.navigate(['current-song'], {
          queryParams: {
            image: SongsPage.tracks[i].album.images[0].url,
            name: SongsPage.tracks[i].name,
            artist: SongsPage.tracks[i].artists[0].name,
            id: SongsPage.tracks[i].id
          }
        });
        SongsViewComponent.audio.pause();
        SongsViewComponent.audio.src = SongsPage.tracks[i].preview_url;
        SongsViewComponent.audio.play();
        break;
      }
    }
  }

  next() {
    for (let i = 0; i < SongsPage.tracks.length; i++) {
      if (SongsPage.tracks[i].id === this.id) {
        i++;
        for (let j = 0; SongsPage.tracks[i].preview_url === null; j++) {
          i++;
          if (i === SongsPage.tracks.length) {
            i = 0;
          }
        }
        this.router.navigate(['current-song'], {
          queryParams: {
            image: SongsPage.tracks[i].album.images[0].url,
            name: SongsPage.tracks[i].name,
            artist: SongsPage.tracks[i].artists[0].name,
            id: SongsPage.tracks[i].id
          }
        });
        SongsViewComponent.audio.pause();
        SongsViewComponent.audio.src = SongsPage.tracks[i].preview_url;
        SongsViewComponent.audio.play();
        break;
      }
    }
  }
}
