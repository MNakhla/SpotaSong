import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres-view',
  templateUrl: './genres-view.component.html',
  styleUrls: ['./genres-view.component.scss']
})
export class GenresViewComponent implements OnInit {
  @Input() public parentData;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(genre) {
    console.log(genre);
    this.router.navigate(['songs'], { queryParams: { g: genre.label, img: genre.img } });
  }
}
