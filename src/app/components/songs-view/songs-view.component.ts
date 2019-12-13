import { OnInit, Input, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SongsPage } from '../../pages/songs/songs.page';
import { CurrentSongPage } from 'src/app/pages/current-song/current-song.page';

@Component({
  selector: 'app-songs-view',
  templateUrl: './songs-view.component.html',
  styleUrls: ['./songs-view.component.scss']
})
export class SongsViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  static currentPlaylistUrl;
  static audio = new Audio();
  static duration;
  static currentTime;
  @Input() public parentData2;
  id;

  ngOnInit() {}

    playAudio(url, img, name, artist, id) {
      SongsViewComponent.currentPlaylistUrl = this.route.snapshot.queryParams;
      if (SongsViewComponent.audio.src !== url) {
      SongsViewComponent.audio.load();
      SongsViewComponent.audio.pause();
      SongsViewComponent.audio.src = url;
      SongsViewComponent.audio.load();
      SongsViewComponent.audio.play(); }
      SongsViewComponent.duration =  SongsViewComponent.audio.duration;
      SongsViewComponent.currentTime = SongsViewComponent.audio.currentTime;
      this.router.navigate(['current-song'], {
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
    for ( let i = 0; i < CurrentSongPage.favoritesNames.length; i++) {
      if ( CurrentSongPage.favoritesNames[i] === this.id) {
        return true;
      }
    }
    return false;
  }




}
