import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsViewComponent } from '../songs-view/songs-view.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  playingPlaylistRoute;
  playlistImage;
  playlistGenre;

  constructor(private router: Router) { }

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }
  favorites() {
    this.router.navigate(['favorites']);
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
