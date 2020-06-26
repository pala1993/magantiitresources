import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';
import { JourneyComponent } from './journey/journey.component';
import { TechDevelopmentComponent } from './tech-development/tech-development.component';
import { TechStaffingComponent } from './tech-staffing/tech-staffing.component';
import { TechTrainingComponent } from './tech-training/tech-training.component';
import { ApplicationDevelopmentServicesComponent } from './application-development-services/application-development-services.component';
import { MobileApplicationServicesComponent } from './tech-development/mobile-application-services/mobile-application-services.component';
import { CloudComputingServicesComponent } from './tech-development/cloud-computing-services/cloud-computing-services.component';
import { DatabaseServicesComponent } from './tech-development/database-services/database-services.component';
import { SecurityServicesComponent } from './tech-development/security-services/security-services.component';
import { WebBrandingComponent } from './tech-development/web-branding/web-branding.component';
import { OperationsMaintenanceServiceComponent } from './tech-development/operations-maintenance-service/operations-maintenance-service.component';
import { RetailComponent } from './industries/retail/retail.component';
import { BankingComponent } from './industries/banking/banking.component';
import { ManufacturingComponent } from './industries/manufacturing/manufacturing.component';
import { InsuranceComponent } from './industries/insurance/insurance.component';
import { CareerComponent } from './journey/career/career.component';
import { TeamComponent } from './journey/team/team.component';
import { RecognitionComponent } from './journey/recognition/recognition.component';
import { CasestudyComponent } from './journey/casestudy/casestudy.component';
import { CorporateGivingComponent } from './journey/corporate-giving/corporate-giving.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeReviewsComponent } from './employee-reviews/employee-reviews.component';
import { ClientsReviewsComponent } from './clients-reviews/clients-reviews.component';
import { CovidComponent } from './insights/covid/covid.component';
import { UsofficialComponent } from './insights/usofficial/usofficial.component';
import { VirtualComponent } from './insights/virtual/virtual.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    IndustriesComponent,
    JourneyComponent,
    TechDevelopmentComponent,
    TechStaffingComponent,
    TechTrainingComponent,
    ApplicationDevelopmentServicesComponent,
    MobileApplicationServicesComponent,
    CloudComputingServicesComponent,
    DatabaseServicesComponent,
    SecurityServicesComponent,
    WebBrandingComponent,
    OperationsMaintenanceServiceComponent,
    RetailComponent,
    BankingComponent,
    ManufacturingComponent,
    InsuranceComponent,
    CareerComponent,
    TeamComponent,
    RecognitionComponent,
    CasestudyComponent,
    CorporateGivingComponent,
    ContactComponent,
    EmployeeReviewsComponent,
    ClientsReviewsComponent,
    CovidComponent,
    UsofficialComponent,
    VirtualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
