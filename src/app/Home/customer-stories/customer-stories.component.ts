import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export class CarouselData {
  quotes?: string;
  position?: string;
  name?: string;
  logo?: string;
  image?: string;
}

@Component({
  selector: 'app-customer-stories',
  templateUrl: './customer-stories.component.html',
  styleUrls: ['./customer-stories.component.scss']
})
export class CustomerStoriesComponent implements OnInit {

  carouselData: CarouselData[] = [
    {
      quotes: '"Automation in the cloud means faster deployment, higher quality products."',
      position: 'Director at Betawinz Holdings (pvt) ltd.',
      name: 'Esala Battege',
      logo: 'http://betawinzholdings.com/assets/img/logo.png',
      image: 'https://dt-cdn.net/images/faces-home-eric-harris-small-1300-c80d8d7658.jpg',
    },
    {
      quotes: '"Automation in the cloud means faster deployment, higher quality products."',
      position: 'Director at Betawinz Holdings (pvt) ltd.',
      name: 'Esala Battege',
      logo: 'http://betawinzholdings.com/assets/img/logo.png',
      image: 'https://dt-cdn.net/images/faces-home-eric-harris-small-1300-c80d8d7658.jpg',
    },
    {
      quotes: '"Automation in the cloud means faster deployment, higher quality products."',
      position: 'Director at Betawinz Holdings (pvt) ltd.',
      name: 'Esala Battege',
      logo: 'http://betawinzholdings.com/assets/img/logo.png',
      image: 'https://dt-cdn.net/images/faces-home-eric-harris-small-1300-c80d8d7658.jpg',
    },
  ];

  custom1Options: OwlOptions = {
    // autoplay: true,
    loop: true,
    items: 3,
    lazyLoad: true,
    animateIn: 'flipInX',
    margin: 10,
    stagePadding: 0,
    merge: true,
    autoWidth: false,
    mergeFit: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    center: false,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1.3
      },
      940: {
        items: 1.3
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
