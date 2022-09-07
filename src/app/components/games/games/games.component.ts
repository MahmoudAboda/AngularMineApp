import { Component, OnInit } from '@angular/core';
import { APP } from 'src/app/models/APP/app';
import { AndroidServiceService } from 'src/app/services/androidService/android-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  listOfApps: APP[] = [];

  constructor(private androidService: AndroidServiceService) { }

  ngOnInit(): void {
    this.androidService.fetchAppByType('game').subscribe(App => this.listOfApps = App);

  }

}