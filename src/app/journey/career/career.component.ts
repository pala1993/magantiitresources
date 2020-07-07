import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';
import { CareerService } from '../../../../services/career.service';
import { JobPost } from '../../../../services/modals';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  JobPost: JobPost[];
  jobid: any;
  jobpostmodal: boolean = false;
  getJobData: Object;
  // JobPostModal: JobPostModal[];

  // isIEOrEdge: boolean = false;

  constructor(private route: ActivatedRoute,
    private Router: Router,
    private CareerService: CareerService) { }

  ngOnInit() {
    this.getJobs();
    // this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }


  getJobs() {
    let jobs: any = {};
    this.CareerService.getJobs(jobs).subscribe((data: any) => {
      this.JobPost = JSON.parse(JSON.stringify(data));
     
    });
  }

  getJobByID(jobid) {
    
    console.log(jobid);
    let inputData: any = {};
    inputData.id=jobid;
    this.CareerService.getJobByID(inputData).subscribe((res) => {
       console.log(res,'id response');
      this.getJobData = res;
     
      if (this.getJobData != '') {
        this.jobpostmodal=true;
      }
      else
      {
        this.jobpostmodal=false;
      }
      
    })

  }

  closeModal(){
    this.jobpostmodal = false;
  }


}
