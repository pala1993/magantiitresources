import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject,OnDestroy,Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  IsMenuOpen: boolean = false;
  IsVisibleMobileMenu: boolean = false;
  IsSubMenuF: boolean = false;
  IsSubSubMenu: boolean = false;
  IsIndustriesMenu: boolean = false;
  IsaboutMenu: boolean = false;
  previousUrl: string;
  servicesClass: boolean = false;
  homeClass: boolean = false;
  aboutClass: boolean = false;
  industriesClass: boolean = false;
  techDevClass: boolean = false;
  appDevClass: boolean = false;
  mobileAppDevClass: boolean = false;
  cloudComputingDevClass: boolean = false;
  dataBaseClass: boolean = false;
  securityClass: boolean = false;
  webBrandingClass: boolean = false;
  opMainClass: boolean = false;
  techStaffingCalss: boolean = false;
  techTrainingsCalss: boolean = false;
  retailClass: boolean = false;
  bankingClass: boolean = false;
  manufacturingClass: boolean = false;
  insuranceClass: boolean = false;
  journeyClass: boolean = false;
  teamClass: boolean = false;
  careerClass: boolean = false;
  caseStudyClass: boolean = false;
  corporateGivingClass: boolean = false;
  reconginitionClass: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2,private router: Router) { this.router.events
    .subscribe((event) => {


      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, this.previousUrl);
        }
        const currentUrlSlug = event.url.slice(1);
        console.log(currentUrlSlug);
        if (currentUrlSlug == "services") {
          this.servicesClass = true;
          this.homeClass = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "home") {
          this.homeClass = true;
          this.industriesClass = false;
          this.servicesClass = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "industries") {
          this.industriesClass = true;
          this.servicesClass = false;
          this.homeClass = false;
          this.aboutClass = false;
          this.techDevClass = false;
          this.techTrainingsCalss = false;
          this.techStaffingCalss = false;
          this.appDevClass = false;
          this.opMainClass = false;
          this.webBrandingClass = false;
          this.securityClass = false;
          this.dataBaseClass = false;
          this.cloudComputingDevClass = false;
          this.mobileAppDevClass = false;
 this.opMainClass = false;
        } else if (currentUrlSlug == "about") {
          this.aboutClass = true;
          this.industriesClass = false;

        } else if (currentUrlSlug == "tech-development") {
          this.techDevClass = true;
          this.servicesClass = true;
          this.techTrainingsCalss = false;
          this.techStaffingCalss = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "app-development") {
          this.servicesClass = true;
          this.techDevClass = true;
          this.appDevClass = true;
          this.opMainClass = false;
          this.webBrandingClass = false;
          this.securityClass = false;
          this.dataBaseClass = false;
          this.cloudComputingDevClass = false;
          this.mobileAppDevClass = false;
          this.aboutClass = false;
        }else if (currentUrlSlug == "mobileApp-services") {
          this.mobileAppDevClass = true;
          this.servicesClass = true;
          this.techDevClass = true;
          this.appDevClass = false;
          this.opMainClass = false;
          this.webBrandingClass = false;
          this.securityClass = false;
          this.dataBaseClass = false;
          this.cloudComputingDevClass = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "cloud-computing-services") {
          this.servicesClass = true;
          this.techDevClass = true;
          this.cloudComputingDevClass = true;
          this.mobileAppDevClass = false;
          this.appDevClass = false;
          this.opMainClass = false;
          this.webBrandingClass = false;
          this.securityClass = false;
          this.dataBaseClass = false;
          this.aboutClass = false;
          this.mobileAppDevClass = false;
        } else if (currentUrlSlug == "database-services") {
          this.servicesClass = true;
          this.techDevClass = true;
          this.dataBaseClass = true;
          this.appDevClass = false;
          this.opMainClass = false;
          this.webBrandingClass = false;
          this.securityClass = false;
          this.cloudComputingDevClass = false;
          this.mobileAppDevClass = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "security-services") {
          this.servicesClass = true;
          this.techDevClass = true;
          this.securityClass = true;
          this.dataBaseClass = false;
          this.cloudComputingDevClass = false;
          this.mobileAppDevClass = false;
          this.appDevClass = false;
          this.opMainClass = false;
          this.webBrandingClass = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "web-branding") {
          this.servicesClass = true;
          this.techDevClass = true;
          this.webBrandingClass = true;
          this.securityClass = false;
          this.dataBaseClass = false;
          this.cloudComputingDevClass = false;
          this.mobileAppDevClass = false;
          this.appDevClass = false;
          this.opMainClass = false;
          this.aboutClass = false;
        }
        else if (currentUrlSlug == "op-main") {
          this.servicesClass = true;
          this.techDevClass = true;
          this.opMainClass = true;
          this.webBrandingClass = false;
          this.securityClass = false;
          this.dataBaseClass = false;
          this.cloudComputingDevClass = false;
          this.mobileAppDevClass = false;
          this.appDevClass = false;
          this.homeClass = false;
          this.aboutClass = false;
        } else if (currentUrlSlug == "tech-staffing") {
          this.techStaffingCalss = true
          this.servicesClass = true;
          this.techTrainingsCalss = false;
          this.techDevClass = false;
          this.homeClass = false;
          this.aboutClass = false;
        }else if (currentUrlSlug == "tech-trainings") {
          this.techTrainingsCalss = true;
          this.techStaffingCalss = false;
          this.servicesClass = true;
          this.techDevClass = false;
          this.homeClass = false;
          this.aboutClass = false;
        }
        else if (currentUrlSlug == "retail") {
          this.industriesClass = true;
          this.retailClass = true;
          this.bankingClass = false;
          this.manufacturingClass = false;
          this.insuranceClass = false;
          this.servicesClass = false;
          this.homeClass = false;
          this.aboutClass = false;
        }
        else if (currentUrlSlug == "banking") {
          this.industriesClass = true;
          this.bankingClass = true;
          this.manufacturingClass = false;
          this.insuranceClass = false;
          this.retailClass = false;
          this.servicesClass = false;
          this.homeClass = false;
          this.aboutClass = false;
         
        }
        else if (currentUrlSlug == "manufacturing") {
          this.industriesClass = true;
          this.manufacturingClass = true;
          this.insuranceClass = false;
          this.bankingClass = false;
          this.retailClass = false;
          this.servicesClass = false;
          this.homeClass = false;
          this.aboutClass = false;
        }
        else if (currentUrlSlug == "insurance") {
          this.industriesClass = true;
          this.insuranceClass = true;
          this.manufacturingClass = false;
          this.bankingClass = false;
          this.retailClass = false;
          this.servicesClass = false;
          this.homeClass = false;
          this.aboutClass = false;
         
        } else if (currentUrlSlug == "journey") {
          this.aboutClass = true;
          this.journeyClass = true;
          this.industriesClass = false;
          this.careerClass = false;
          this.caseStudyClass = false;
          this.corporateGivingClass = false;
          this.teamClass = false;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
          
        }
        else if (currentUrlSlug == "team") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.industriesClass = false;
          this.careerClass = false;
          this.caseStudyClass = false;
          this.corporateGivingClass = false;
          this.teamClass = true;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
        }
        else if (currentUrlSlug == "recognition") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.careerClass = false;
          this.industriesClass = false;
          this.caseStudyClass = false;
          this.corporateGivingClass = false;
          this.teamClass = false;
          this.reconginitionClass = true;
          this.servicesClass = false;
          this.homeClass = false;
        }
        else if (currentUrlSlug == "corporate-giving") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.careerClass = false;
          this.industriesClass = false;
          this.caseStudyClass = false;
          this.corporateGivingClass = true;
          this.teamClass = false;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
        }
        else if (currentUrlSlug == "casestudy") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.careerClass = false;
          this.industriesClass = false;
          this.caseStudyClass = true;
          this.corporateGivingClass = false;
          this.teamClass = false;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
        }
        else if (currentUrlSlug == "career") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.careerClass = true;
          this.industriesClass = false;
          this.caseStudyClass = false;
          this.corporateGivingClass = false;
          this.teamClass = false;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
        } else if (currentUrlSlug == "curorc") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.careerClass = false;
          this.industriesClass = false;
          this.caseStudyClass = true;
          this.corporateGivingClass = false;
          this.teamClass = false;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
        } else if (currentUrlSlug == "futek") {
          this.aboutClass = true;
          this.journeyClass = false;
          this.careerClass = false;
          this.industriesClass = false;
          this.caseStudyClass = true;
          this.corporateGivingClass = false;
          this.teamClass = false;
          this.reconginitionClass = false;
          this.servicesClass = false;
          this.homeClass = false;
        } else if (currentUrlSlug == "covid-19") { 
          this.aboutClass = false;
         
          this.industriesClass = false;
     
          this.servicesClass = false;
          this.homeClass = true;
        }else if (currentUrlSlug == "usofficial") { 
          this.aboutClass = false;
         
          this.industriesClass = false;
          
          this.servicesClass = false;
          this.homeClass = true;
        } else if (currentUrlSlug == "virtual") { 
          this.aboutClass = false;
          this.industriesClass = false;
          this.servicesClass = false;
          this.homeClass = true;
        } else if (currentUrlSlug=="client-reviews") {
          this.homeClass = false;
          this.aboutClass = true;
          this.reconginitionClass = true;
          this.industriesClass = false;
          this.servicesClass = false;
        }  else if (currentUrlSlug=="employee-reviews") {
          this.homeClass = false;
          this.aboutClass = true;
          this.reconginitionClass = true;
          this.industriesClass = false;
          this.servicesClass = false;
        } else {
          this.homeClass = true;
        }
        this.previousUrl = currentUrlSlug;
       
      }
    });}

  ngOnInit(): void {
    
  }
 

  mobileNavTrigger() {
    this.IsMenuOpen = !this.IsMenuOpen;
    this.renderer.addClass(this.document.body, 'scrolling-locked');
    this.IsVisibleMobileMenu = !this.IsVisibleMobileMenu;
    
  }

  showDeeperLevel() {
    this.IsSubMenuF = !this.IsSubMenuF;
  }
  showDeeperLevelThird() {
    this.IsSubSubMenu = !this.IsSubSubMenu;
  }
  industriesMenu() {
    this.IsIndustriesMenu = !this.IsIndustriesMenu
  }
  aboutMenu() {
    this.IsaboutMenu = !this.IsaboutMenu;
  }
}
