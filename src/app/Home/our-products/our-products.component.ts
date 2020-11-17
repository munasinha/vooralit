import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export class CarouselData {
  title?: string;
  category?: string;
  categoryIcon?: string;
  image?: string;
  description?: string;
}

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {

  carouselData: CarouselData[] = [
    {
      title: 'Learning Management System',
      category: 'Education',
      categoryIcon: 'fa-graduation-cap',
      image: '../../../assets/images/lms.jpg',
      description: `Vooral Class Room is an impressive Learning Management
                    System which comprises of
                    all the basic features that needed for online learning.`
    },
    {
      title: 'Online Shoping Platform',
      category: 'E-commerce',
      categoryIcon: 'fa-shopping-bag',
      image: '../../../assets/images/ecom.jpg',
      description: `Vooral-LMS is an impressive Learning Management
                    System which comprises of
                    all the basic features that needed for online learning.`
    },
    {
      title: 'Invoicing Printing Application',
      category: 'Finance',
      categoryIcon: 'fa-calculator',
      image: '../../../assets/images/invoice.jpg',
      description: `Vooral-LMS is an impressive Learning Management
                    System which comprises of
                    all the basic features that needed for online learning.`
    },
    {
      title: 'Point Of Sale System (POS)',
      category: 'Retail',
      categoryIcon: 'fa-shopping-cart',
      image: '../../../assets/images/pos-1.jpg',
      description: `Vooral-LMS is an impressive Learning Management
                    System which comprises of
                    all the basic features that needed for online learning.`
    },
  ];

  customOptions: OwlOptions = {
    autoplay: true,
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
    center: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
