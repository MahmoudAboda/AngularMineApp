import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP } from 'src/app/models/APP/app';
import { AndroidServiceService } from 'src/app/services/androidService/android-service.service';

@Component({
  selector: 'app-all-apps',
  templateUrl: './all-apps.component.html',
  styleUrls: ['./all-apps.component.css']
})
export class AllAppsComponent implements OnInit {

  constructor(private androidService: AndroidServiceService ,private route:ActivatedRoute) { }
  listOfApps: APP[] = [];
  searchMode:boolean;

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>
    {    this.listApps();
    });
  }
  listApps(){
    this.searchMode =this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handlSearchApps();}
      else{
        this.handleListApps();

      }
  }

  handleListApps(){
    this.androidService.fetchAll().subscribe(Apps => this.listOfApps = Apps);

  }

  handlSearchApps(){
    const theKeyword:string =this.route.snapshot.paramMap.get('keyword');
    this.androidService.serachApps(theKeyword).subscribe(
      data => this.listOfApps=data
      
    );

  }


}
