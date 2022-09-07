import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP } from 'src/app/models/APP/app';
import { AndroidServiceService } from 'src/app/services/androidService/android-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private androidService: AndroidServiceService ,private route:ActivatedRoute) { }
  listOfApps: APP[] = [];
  listOfApps2: APP[] = [];
  searchMode:boolean;

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>
    {
 this.listApps();
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
