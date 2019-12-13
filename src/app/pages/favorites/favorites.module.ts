import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavoritesPage } from './favorites.page';
import { CurrentSongPage } from '../current-song/current-song.page';
// import { SongsViewComponent } from '../../components/songs-view/songs-view.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
