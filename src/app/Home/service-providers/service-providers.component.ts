import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    items: 12,
    lazyLoad: true,
    // animateIn: 'flipInX',
    margin: 10,
    stagePadding: 0,
    // merge: true,
    // autoWidth: false,
    mergeFit: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    // center: true,
    // navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 8
      }
    },
    // nav: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
