import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Objectives';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://wttc.org/DesktopModules/MVC/Carousel/images/693/1_20200810141550_Safe%20Travels%20New%20Normal%20Global%20Protocols%20and%20Stamp.jpg';
  image3 = 'https://www.freshgigs.ca/blog/wp-content/uploads/2020/02/image5.jpg';

  constructor() { }

  ngOnInit() {
  }

}