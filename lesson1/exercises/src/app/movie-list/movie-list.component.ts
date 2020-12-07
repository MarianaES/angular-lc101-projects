import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Manchurian Candidate', 'Oceans 8', 'Blade Runner 2049', 'The Big Short'];
   gifURL = 'https://media4.giphy.com/media/l378b2eCkQV5m3eN2/giphy.gif';

   constructor() { }

   ngOnInit() {
   }

}
