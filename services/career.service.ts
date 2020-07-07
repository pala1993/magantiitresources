import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CareerService {
  result: any;
  public url="http://localhost:3000/";
  constructor(private HttpClient:HttpClient) { }

//   get all jobs ..
  getJobs(getall){
      console.log(getall, "getting jobs");
     return this.HttpClient.post(this.url+"getjobs",getall).pipe(map((result)=>this.result = result ));
  }


//   get job by id ..
getJobByID(inpuData){
console.log(inpuData)
 return this.HttpClient.post(this.url+"getJobByID", JSON.parse(JSON.stringify(inpuData))).pipe(map((result)=>
 this.result = result 
 ));
}

}