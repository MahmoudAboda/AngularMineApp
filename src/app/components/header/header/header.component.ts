import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enum/role.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router ,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  doSearch(value:string){
    this.router.navigateByUrl(`/search/${value}`);
  }
  public get isAdmin(): boolean {
    return this.getUserRole() === Role.ADMIN || this.getUserRole() === Role.SUPER_ADMIN;
  }
  private getUserRole(): string {
    return this.authenticationService.getUserFromLocalCache().role;
  }
}
