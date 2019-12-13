import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // tslint:disable-next-line: max-line-length
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'songs', loadChildren: './pages/songs/songs.module#SongsPageModule' },
  { path: 'current-song', loadChildren: './pages/current-song/current-song.module#CurrentSongPageModule' },
  { path: 'favorites', loadChildren: './pages/favorites/favorites.module#FavoritesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
