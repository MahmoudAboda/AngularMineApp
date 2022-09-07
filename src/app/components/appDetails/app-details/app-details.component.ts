import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP } from 'src/app/models/APP/app';
import { AppDestnation } from 'src/app/models/AppDestnation/app-destnation';
import { AppDetails } from 'src/app/models/AppDetails/app-details';
import { AppFeatures } from 'src/app/models/AppFeatures/app-features';
import { DownloadWays } from 'src/app/models/DownloadWays/download-ways';
import { AndroidServiceService } from 'src/app/services/androidService/android-service.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  app:APP;
  appFeatures : AppFeatures;
  appDownloadWays:DownloadWays;
  appDetails:AppDetails;
  appDestination:AppDestnation;
  constructor(private androidService : AndroidServiceService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleAppDetails();
      this.handleAppFeatures();
      this.handleAppDownloadWays();
      this.handleAppDestination();
    })
  }

  handleAppDetails(){
    const theAppId:number=+this.route.snapshot.paramMap.get('id');
    this.androidService.getAppList(theAppId).subscribe(
      data =>{
        this.app=data;
      }
    )
  }

  handleAppFeatures(){
    const theAppId:number=+this.route.snapshot.paramMap.get('id');
    this.androidService.getAppFeatures(theAppId).subscribe(
      data1 =>{
        this.appFeatures=data1;
      }
    )
  }

  handleAppDownloadWays(){
    const theAppId:number=+this.route.snapshot.paramMap.get('id');
    this.androidService.getAppDownloadWays(theAppId).subscribe(
      data1 =>{
        this.appDownloadWays=data1;
      }
    )
  }

  handleAppDownloadDetails(){
    const theAppId:number=+this.route.snapshot.paramMap.get('id');
    this.androidService.getAppDownloadDetails(theAppId).subscribe(
      data1 =>{
        this.appDetails=data1;
      }
    )
  }

  handleAppDestination(){
    const theAppId:number=+this.route.snapshot.paramMap.get('id');
    this.androidService.getAppDestination(theAppId).subscribe(
      data1 =>{
        this.appDestination=data1;
      }
    )
  }


}
