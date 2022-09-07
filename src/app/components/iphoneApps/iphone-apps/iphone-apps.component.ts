import { Component, OnInit } from '@angular/core';
import { APP } from 'src/app/models/APP/app';
import { AndroidServiceService } from 'src/app/services/androidService/android-service.service';

@Component({
  selector: 'app-iphone-apps',
  templateUrl: './iphone-apps.component.html',
  styleUrls: ['./iphone-apps.component.css']
})
export class IphoneAppsComponent implements OnInit {
  listOfApps: APP[] = [];

  constructor(private androidService: AndroidServiceService) { }

  ngOnInit(): void {
    this.androidService.fetchAppByType('iphone').subscribe(App => this.listOfApps = App);

  }

}
