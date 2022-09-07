import { Component, OnInit } from '@angular/core';
import { APP } from 'src/app/models/APP/app';
import { AndroidServiceService } from 'src/app/services/androidService/android-service.service';

@Component({
  selector: 'app-android-apps',
  templateUrl: './android-apps.component.html',
  styleUrls: ['./android-apps.component.css']
})
export class AndroidAppsComponent implements OnInit {
  constructor(private androidService: AndroidServiceService) { }
  listOfApps: APP[] = [];

  ngOnInit(): void {
    this.androidService.fetchAll().subscribe(Apps => this.listOfApps = Apps);
    this.androidService.fetchAppByType('android').subscribe(App => this.listOfApps = App);
  }

}
