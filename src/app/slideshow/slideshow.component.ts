import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{

  images = ['code.jpg', 'laptop.jpg', 'university.jpg'];
  headlines = ['Patrick Frantzen, Web-Developer',
  'Former Food Quality Manager', 
  'Learning to code since 2022' ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage= true;
      },10)
    }, 8000);
  }
}
