import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://medium.com/', 'https://www.reddit.com/', 'https://techcrunch.com/'];
  constructor() { }

  ngOnInit() {
  }

}
