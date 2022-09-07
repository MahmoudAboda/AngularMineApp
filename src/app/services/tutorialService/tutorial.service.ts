import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorialModel/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private basUrl = "http://localhost:8090/tutorial/getAll";


  constructor(private httpClient: HttpClient) { }
  public fetchAll(): Observable<Tutorial[]> {
    return this.httpClient.get<Tutorial[]>(this.basUrl);
  }
}
