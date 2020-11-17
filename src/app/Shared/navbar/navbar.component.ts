import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isShown = false;

  constructor() { }

  ngOnInit(): void {

    // Navbar toggling is only enabled when the value of the following variable is true
    // This prevents toggling the navbar, when the site is visited via wider screens
    let enableNavbarToggle = false;

    function toggleNavbarHeight(): void
    {
      const navbarContainerEle = document.getElementById('navbar-cnt');

      if (navbarContainerEle != null)
      {
          if (navbarContainerEle.style.height === '75px')
          {
            navbarContainerEle.style.height = 'auto';
          }
          else if (navbarContainerEle.style.height === 'auto')
          {
            navbarContainerEle.style.height = '75px';
          }
      }

    }

    $('#navbar-toggler').on('click', () => {
      // if the #navbar-toggler element is clicked, it means that the visitor is using a smaller device
      // So we should enable nav bar toggling function
      enableNavbarToggle = true;

      toggleNavbarHeight();
    });

    $('#navbarTogglerDemo03 > ul > li').on('click', () => {
      if (enableNavbarToggle === true) {
        toggleNavbarHeight();
      }
    });

  }

}
