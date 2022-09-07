import { Component, OnInit } from '@angular/core';
import { AboutUs } from 'src/app/models/AboutUs/about-us';
import { AboutUsService } from 'src/app/services/aboutUsService/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private androidService: AboutUsService) { }
  Aboutus: AboutUs[] = [];

  ngOnInit(): void {
    this.androidService.fetchAll().subscribe(About => this.Aboutus = About);
  }

}
