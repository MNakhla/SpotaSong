import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/service/spotify.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CurrentSongPage } from "../current-song/current-song.page";
import { SongsViewComponent } from "src/app/components/songs-view/songs-view.component";
// import { DatabaseService } from "src/app/database.service";
// import { db } from "mongodb";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.page.html",
  styleUrls: ["./favorites.page.scss"]
})
export class FavoritesPage implements OnInit {
  myTracks = [];
  id;
  playingSongRoute;
  name;
  image;
  artist;
  idSong;

  playingPlaylistRoute;
  playlistImage;
  playlistGenre;
  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router // private DatabaseService: DatabaseService
  ) { }

  async ngOnInit() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < CurrentSongPage.favoritesNames.length; i++) {
      await this.spotifyService
        .getTrack(CurrentSongPage.favoritesNames[i])
        .subscribe((response: any) => {
          if (response) {
            this.myTracks.push(response);
          } else {
            this.myTracks = [[]];
          }
          console.log(this.myTracks);
        });
    }
  }
  home() {
    this.router.navigate(["home"]);
  }

  async playAudio(url, img, name, artist, id) {
    SongsViewComponent.currentPlaylistUrl = this.route.snapshot.queryParams;
    if (SongsViewComponent.audio.src !== url) {
      SongsViewComponent.audio.load();
      SongsViewComponent.audio.pause();
      SongsViewComponent.audio.src = url;
      SongsViewComponent.audio.load();
      SongsViewComponent.audio.play();
    }
    SongsViewComponent.duration = SongsViewComponent.audio.duration;
    SongsViewComponent.currentTime = SongsViewComponent.audio.currentTime;
    this.router.navigate(["current-song"], {
      queryParams: {
        image: img,
        name: name,
        artist: artist,
        id: id
      }
    });
    this.id = id;
  }

  toggleHeart() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < CurrentSongPage.favoritesNames.length; i++) {
      if (CurrentSongPage.favoritesNames[i] === this.id) {
        return true;
      }
    }
    return false;
  }

  getSongUrl() {
    if (
      CurrentSongPage.playingSongUrl != null &&
      CurrentSongPage.playingSongUrl != {} &&
      CurrentSongPage.playingSongUrl != []
    ) {
      this.playingSongRoute = CurrentSongPage.playingSongUrl;
      console.log(this.playingSongRoute);
      this.image = this.playingSongRoute.image;
      this.name = this.playingSongRoute.name;
      this.artist = this.playingSongRoute.artist;
      this.idSong = this.playingSongRoute.id;
      console.log(this.image);
      this.router.navigate(["current-song"], {
        queryParams: {
          image: this.image,
          name: this.name,
          artist: this.artist,
          id: this.idSong
        }
      });
    }
  }

  getCurrentPlaylist() {
    if (
      SongsViewComponent.currentPlaylistUrl != null &&
      SongsViewComponent.currentPlaylistUrl !== {} &&
      SongsViewComponent.currentPlaylistUrl !== []
    ) {
      this.playingPlaylistRoute = SongsViewComponent.currentPlaylistUrl;
      console.log(this.playingPlaylistRoute);
      this.playlistImage = this.playingPlaylistRoute.img;
      this.playlistGenre = this.playingPlaylistRoute.g;
      // console.log(this.image);
      this.router.navigate(["songs"], {
        queryParams: {
          img: this.playlistImage,
          g: this.playlistGenre
        }
      });
    }
  }
}
