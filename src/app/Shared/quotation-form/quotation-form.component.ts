import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phonenumber: string;
//   country: string;
//   city: string;
//   companyname: string;
//   companyType: string;
//   discription: string;
//   Consulting: number;
//   uiux: number;
//   CloudService: number;
//   RESTfullAPIService: number;
//   StaticWebSite: number;
//   WebApplicationDevelopment: number;
//   MobileApplicationDevelopment: number;
//   EcommMobApp: number;
// }

export class QuotationFormComponent implements OnInit {

  checkoutForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      country: ['', Validators.required],
      city: '',
      companyname: ['', Validators.required],
      companyType: ['StartupEarlyStage', Validators.required],
      discription: '',
      Consulting: false,
      uiux: false,
      CloudService: false,
      RESTfullAPIService: false,
      StaticWebSite: false,
      WebApplicationDevelopment: false,
      MobileApplicationDevelopment: false,
      EcommMobApp: false
    });
  }

    get f() {
    return this.checkoutForm.controls;
    }

  onSubmit(customerData: any): void {
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      console.log('invalid');
      return;
    }

    const firstName = customerData.firstName;
    const lastName = customerData.lastName;
    const customerEmail = customerData.email;
    const phonenumber = customerData.phonenumber;
    const customerCountry = customerData.country;
    const customerCity = customerData.city;
    const companyname = customerData.companyname;
    const companyType = customerData.companyType;
    const discription = customerData.discription;
    const Consulting = customerData.Consulting;
    const uiux = customerData.uiux;
    const CloudService = customerData.CloudService;
    const RESTfullAPIService = customerData.RESTfullAPIService;
    const StaticWebSite = customerData.StaticWebSite;
    const WebApplicationDevelopment = customerData.WebApplicationDevelopment;
    const MobileApplicationDevelopment =
      customerData.MobileApplicationDevelopment;
    const EcommMobApp = customerData.EcommMobApp;

    const dataset = {
      first_name: firstName,
      last_name: lastName,
      email: customerEmail,
      phone_no: phonenumber,
      country: customerCountry,
      city: customerCity,
      company_name: companyname,
      company_type: companyType,
      requirement: discription,
      consulting: Consulting,
      static_website: StaticWebSite,
      ui_ux: uiux,
      web_application: WebApplicationDevelopment,
      cloud_service: CloudService,
      mobile_app: MobileApplicationDevelopment,
      restfull_api: RESTfullAPIService,
      ecommerce: EcommMobApp
    };

    this.submitformjq(dataset);
    console.log('valid');
    this.submitted = false;
    this.checkoutForm.reset();
  }

  submitformjq(data: any): void {
    $('.submit-btn').text('SENDING...');
    const settings = {
      async: true,
      crossDomain: true,
      url: 'http://api.vooralit.com/api/quotation_form',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*'
      },
      processData: false,
      data: JSON.stringify(data)
    };

    $.ajax(settings).done((response) => {
      console.log('res =>  ' + response);
      if (response === 'success') {
        $('.submit-btn').fadeOut('fast', () => {
          $('#ajax-msg-container').html(
            '<h6>Thank You, Your request was sent successfully.<br>We will contact you as soon as possible.</h6>'
          );
          $('#ajax-msg-container').css('background-color', '#3fad3f');
          $('#ajax-msg-container').fadeIn();
          setTimeout(() => {
            $('#ajax-msg-container').remove();
            $('.submit-btn')
              .text('SUBMIT')
              .fadeIn();
          }, 3000);
        });
      } else {
        $('.submit-btn').text('SUBMIT');
        $('#ajax-msg-container').html(
          '<h6>Sorry, An unexpected error occured!<br>Please try again later<h6>'
        );
        $('#ajax-msg-container').css('background-color', '#dc3545');
        $('#ajax-msg-container').fadeIn();
      }
    });
  }

}
