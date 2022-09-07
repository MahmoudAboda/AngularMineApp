import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP } from 'src/app/models/APP/app';
import { AppDestnation } from 'src/app/models/AppDestnation/app-destnation';
import { AppDetails } from 'src/app/models/AppDetails/app-details';
import { AppFeatures } from 'src/app/models/AppFeatures/app-features';
import { DownloadWays } from 'src/app/models/DownloadWays/download-ways';

@Injectable({
  providedIn: 'root'
})
export class AndroidServiceService {
 
  private appUrl = "http://localhost:8090/app/findbyappid";
  private basUrl = "http://localhost:8090/app/getAll";
  private basUrl2 = "http://localhost:8090/app/findbyapptype";
  private appFeaturesUrl = "http://localhost:8090/appFeatures/findbyappid";
  private appDownloadWaysUrl = "http://localhost:8090/appDownloadWays/findbyappid";
  private appDetailsUrl = "http://localhost:8090/appDetails/findbyappid";
  private appDestinationUrl = "http://localhost:8090/appDestination/findbyappid";
  private searchAppsUrl = "http://localhost:8090/app/search";



  constructor(private httpClient: HttpClient) { }
  public fetchAll(): Observable<APP[]> {
    return this.httpClient.get<APP[]>(this.basUrl);
  }

  public fetchAppByType(searchName: string): Observable<APP[]> {
    const commentUrl = `${this.basUrl2}/${searchName}`;
    return this.httpClient.get<APP[]>(commentUrl);
  }

  getAppList(theAppId:number):Observable<APP>{
    const appUrl1=`${this.appUrl}/${theAppId}`;
    return this.httpClient.get<APP>(appUrl1);
  }

  getAppFeatures(theAppId:number):Observable<AppFeatures>{
    const appUrl1=`${this.appFeaturesUrl}/${theAppId}`;
    return this.httpClient.get<AppFeatures>(appUrl1);
  }

  getAppDownloadWays(theAppId:number):Observable<DownloadWays>{
    const appUrl2=`${this.appDownloadWaysUrl}/${theAppId}`;
    return this.httpClient.get<DownloadWays>(appUrl2);
  }

  getAppDownloadDetails(theAppId:number):Observable<AppDetails>{
    const appUrl2=`${this.appDetailsUrl}/${theAppId}`;
    return this.httpClient.get<AppDetails>(appUrl2);
  }

  getAppDestination(theAppId:number):Observable<AppDestnation>{
    const appUrl2=`${this.appDestinationUrl}/${theAppId}`;
    return this.httpClient.get<AppDestnation>(appUrl2);
  }
  serachApps(theKeyword: string) {
    const appUrl5=`${this.searchAppsUrl}/${theKeyword}`;
    return this.httpClient.get<APP[]>(appUrl5);  }

}
