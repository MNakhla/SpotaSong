import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurrentSongPage } from './current-song.page';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentSongPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrentSongPage, NavBarComponent]
})
export class CurrentSongPageModule {}
