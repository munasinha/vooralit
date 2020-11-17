import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusLayoutComponent } from './Aboutus/aboutus-layout/aboutus-layout.component';
import { ContactusLayoutComponent } from './Contactus/contactus-layout/contactus-layout.component';
import { HomeLayoutComponent } from './Home/home-layout/home-layout.component';
import { OurservicesLayoutComponent } from './Ourservices/ourservices-layout/ourservices-layout.component';
import { PortfolioLayoutComponent } from './Portfolio/portfolio-layout/portfolio-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'about-us', component: AboutusLayoutComponent},
  {path: 'our-services', component: OurservicesLayoutComponent},
  {path: 'our-Workes', component: PortfolioLayoutComponent},
  {path: 'contact-us', component: ContactusLayoutComponent},
  { path: '**', component: HomeLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
