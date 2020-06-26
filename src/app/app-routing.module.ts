import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JourneyComponent } from './journey/journey.component';
import { CareerComponent } from './journey/career/career.component';
import { CorporateGivingComponent } from './journey/corporate-giving/corporate-giving.component';
import { TeamComponent } from './journey/team/team.component';
import { RecognitionComponent } from './journey/recognition/recognition.component';
import { CasestudyComponent } from './journey/casestudy/casestudy.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';
import { BankingComponent } from './industries/banking/banking.component';
import { RetailComponent } from './industries/retail/retail.component';
import { ManufacturingComponent } from './industries/manufacturing/manufacturing.component';
import { InsuranceComponent } from './industries/insurance/insurance.component';
import { ApplicationDevelopmentServicesComponent } from './application-development-services/application-development-services.component';
import { MobileApplicationServicesComponent } from './tech-development/mobile-application-services/mobile-application-services.component';
import { CloudComputingServicesComponent } from './tech-development/cloud-computing-services/cloud-computing-services.component';
import { SecurityServicesComponent } from './tech-development/security-services/security-services.component';
import { DatabaseServicesComponent } from './tech-development/database-services/database-services.component';
import { OperationsMaintenanceServiceComponent } from './tech-development/operations-maintenance-service/operations-maintenance-service.component';
import { WebBrandingComponent } from './tech-development/web-branding/web-branding.component';
import { TechStaffingComponent } from './tech-staffing/tech-staffing.component';
import { TechTrainingComponent } from './tech-training/tech-training.component';
import { TechDevelopmentComponent } from './tech-development/tech-development.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsReviewsComponent } from './clients-reviews/clients-reviews.component';
import { EmployeeReviewsComponent } from './employee-reviews/employee-reviews.component';
import { CovidComponent } from './insights/covid/covid.component';
import { UsofficialComponent } from './insights/usofficial/usofficial.component';
import { VirtualComponent } from './insights/virtual/virtual.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'journey', pathMatch: 'prefix', component: JourneyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'retail', component: RetailComponent },
  { path: 'manufacturing', component: ManufacturingComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'career', component: CareerComponent },
  { path: 'casestudy', component: CasestudyComponent },
  { path: 'recognition', component: RecognitionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'corporate-giving', component: CorporateGivingComponent },
  { path: 'app-development', component: ApplicationDevelopmentServicesComponent },
  { path: 'mobileApp-services', component: MobileApplicationServicesComponent },
  { path: 'cloud-computing-services', component: CloudComputingServicesComponent },
  { path: 'database-services', component: DatabaseServicesComponent },
  { path: 'security-services', component: SecurityServicesComponent },
  { path: 'web-branding', component: WebBrandingComponent },
  { path: 'op-main', component: OperationsMaintenanceServiceComponent },
  { path: 'tech-development', component: TechDevelopmentComponent },
  { path: 'tech-staffing', component: TechStaffingComponent },
  { path: 'tech-trainings', component: TechTrainingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'client-reviews', component: ClientsReviewsComponent },
  { path: 'employee-reviews', component: EmployeeReviewsComponent },
  { path: 'covid-19', component: CovidComponent },
  { path: 'usofficial', component: UsofficialComponent },
  { path: 'virtual', component: VirtualComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

