import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SongsPage } from './songs.page';
import { SongsViewComponent } from '../../components/songs-view/songs-view.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';


const routes: Routes = [
  {
    path: '',
    component: SongsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SongsPage,  SongsViewComponent]
})
export class SongsPageModule {}
