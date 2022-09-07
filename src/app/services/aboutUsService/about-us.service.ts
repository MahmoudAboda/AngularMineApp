import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUs } from 'src/app/models/AboutUs/about-us';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private basUrl = "http://localhost:8090/about/getAll";


  constructor(private httpClient: HttpClient) { }

  public fetchAll(): Observable<AboutUs[]> {
    return this.httpClient.get<AboutUs[]>(this.basUrl);
  }

}
