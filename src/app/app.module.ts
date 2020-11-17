import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HomeLayoutComponent } from './Home/home-layout/home-layout.component';
import { AboutusLayoutComponent } from './Aboutus/aboutus-layout/aboutus-layout.component';
import { ContactusLayoutComponent } from './Contactus/contactus-layout/contactus-layout.component';
import { OurservicesLayoutComponent } from './Ourservices/ourservices-layout/ourservices-layout.component';
import { PortfolioLayoutComponent } from './Portfolio/portfolio-layout/portfolio-layout.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { QuotationFormComponent } from './Shared/quotation-form/quotation-form.component';
import { TopBannerComponent } from './Home/top-banner/top-banner.component';
import { ClientsBarComponent } from './Home/clients-bar/clients-bar.component';
import { FeaturesComponent } from './Home/features/features.component';
import { ServicesComponent } from './Home/services/services.component';
import { WrittingwordsSectionComponent } from './Home/writtingwords-section/writtingwords-section.component';
import { MidBannerComponent } from './Home/mid-banner/mid-banner.component';
import { TopBannerContactUsComponent } from './Contactus/top-banner-contact-us/top-banner-contact-us.component';
import { OurProductsComponent } from './Home/our-products/our-products.component';
import { ServiceProvidersComponent } from './Home/service-providers/service-providers.component';
import { TopBannerOurservicesComponent } from './Ourservices/top-banner-ourservices/top-banner-ourservices.component';

// 3rd party libs

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CustomerStoriesComponent } from './Home/customer-stories/customer-stories.component';
import { DarkProductBannerComponent } from './Home/dark-product-banner/dark-product-banner.component';
import { LightProductBannerComponent } from './Home/light-product-banner/light-product-banner.component';
import { WeHavesolutionBannerComponent } from './Home/we-havesolution-banner/we-havesolution-banner.component';
import { TopBannerPortfolioComponent } from './Portfolio/top-banner-portfolio/top-banner-portfolio.component';
import { TopBannerAboutUsComponent } from './Aboutus/top-banner-about-us/top-banner-about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AboutusLayoutComponent,
    ContactusLayoutComponent,
    OurservicesLayoutComponent,
    PortfolioLayoutComponent,
    NavbarComponent,
    FooterComponent,
    QuotationFormComponent,
    TopBannerComponent,
    ClientsBarComponent,
    FeaturesComponent,
    ServicesComponent,
    WrittingwordsSectionComponent,
    MidBannerComponent,
    TopBannerContactUsComponent,
    OurProductsComponent,
    ServiceProvidersComponent,
    TopBannerOurservicesComponent,
    CustomerStoriesComponent,
    DarkProductBannerComponent,
    LightProductBannerComponent,
    WeHavesolutionBannerComponent,
    TopBannerPortfolioComponent,
    TopBannerAboutUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
