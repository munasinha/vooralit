import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices-layout',
  templateUrl: './ourservices-layout.component.html',
  styleUrls: ['./ourservices-layout.component.scss']
})
export class OurservicesLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.bg').click((e) => {
      $(this).addClass('animated bounce');
    });

    this.ststic_web_toggle_icon();
    this.web_application_toggle_icon();
    this.api_toggle_icon();
    this.mobile_toggle_icon();
    this.cloud_toggle_icon();
    this.ecomm_toggle_icon();
  }

  ststic_web_toggle_icon() {
    $(document).ready(() => {
      $('#ststicweb_toggle-icon-up').hide();
    });

    $('#ststicweb_toggle-icon-down').click(() => {
      $('#ststicweb_toggle-icon-down').toggle();
      $('#ststicweb_toggle-icon-up').toggle();
    });

    $('#ststicweb_toggle-icon-up').click(() => {
      $('#ststicweb_toggle-icon-down').toggle();
      $('#ststicweb_toggle-icon-up').toggle();
    });

    $('#ststicweb').click(() => {
      $('#ststicweb_toggle-icon-down').toggle();
      $('#ststicweb_toggle-icon-up').toggle();
    });
  }

  web_application_toggle_icon() {
    $(document).ready(() => {
      $('#webapplication_toggle_icon_up').hide();
    });

    $('#webapplication_toggle_icon_down').click(() => {
      $('#webapplication_toggle_icon_down').toggle();
      $('#webapplication_toggle_icon_up').toggle();
    });

    $('#webapplication_toggle_icon_up').click(() => {
      $('#webapplication_toggle_icon_down').toggle();
      $('#webapplication_toggle_icon_up').toggle();
    });

    $('#webapplication').click(() => {
      $('#webapplication_toggle_icon_down').toggle();
      $('#webapplication_toggle_icon_up').toggle();
    });
  }

  api_toggle_icon() {
    $(document).ready(() => {
      $('#api_toggle_icon_up').hide();
    });

    $('#api_toggle_icon_down').click(() => {
      $('#api_toggle_icon_down').toggle();
      $('#api_toggle_icon_up').toggle();
    });

    $('#api_toggle_icon_up').click(() => {
      $('#api_toggle_icon_down').toggle();
      $('#api_toggle_icon_up').toggle();
    });

    $('#api').click(() => {
      $('#api_toggle_icon_down').toggle();
      $('#api_toggle_icon_up').toggle();
    });
  }


  mobile_toggle_icon() {
    $(document).ready(() => {
      $('#mobile_toggle_icon_up').hide();
    });

    $('#mobile_toggle_icon_down').click(() => {
      $('#mobile_toggle_icon_down').toggle();
      $('#mobile_toggle_icon_up').toggle();
    });

    $('#mobile_toggle_icon_up').click(() => {
      $('#mobile_toggle_icon_down').toggle();
      $('#mobile_toggle_icon_up').toggle();
    });

    $('#mobile').click(() => {
      $('#mobile_toggle_icon_down').toggle();
      $('#mobile_toggle_icon_up').toggle();
    });
  }

  cloud_toggle_icon() {
    $(document).ready(() => {
      $('#cloud_toggle_icon_up').hide();
    });

    $('#cloud_toggle_icon_down').click(() => {
      $('#cloud_toggle_icon_down').toggle();
      $('#cloud_toggle_icon_up').toggle();
    });

    $('#cloud_toggle_icon_up').click(() => {
      $('#cloud_toggle_icon_down').toggle();
      $('#cloud_toggle_icon_up').toggle();
    });

    $('#cloud').click(() => {
      $('#cloud_toggle_icon_down').toggle();
      $('#cloud_toggle_icon_up').toggle();
    });
  }

  ecomm_toggle_icon() {
    $(document).ready(() => {
      $('#ecomm_toggle_icon_up').hide();
    });

    $('#ecomm_toggle_icon_down').click(() => {
      $('#ecomm_toggle_icon_down').toggle();
      $('#ecomm_toggle_icon_up').toggle();
    });

    $('#ecomm_toggle_icon_up').click(() => {
      $('#ecomm_toggle_icon_down').toggle();
      $('#ecomm_toggle_icon_up').toggle();
    });

    $('#ecomm').click(() => {
      $('#ecomm_toggle_icon_down').toggle();
      $('#ecomm_toggle_icon_up').toggle();
    });
  }

}
