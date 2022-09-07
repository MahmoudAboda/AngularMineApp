import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';
import { UserComponent } from './components/user/user/user.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { AndroidAppsComponent } from './components/androidApps/android-apps/android-apps.component';
import { GamesComponent } from './components/games/games/games.component';
import { AboutUsComponent } from './components/aboutUs/about-us/about-us.component';
import { IphoneAppsComponent } from './components/iphoneApps/iphone-apps/iphone-apps.component';
import { TutorialComponent } from './components/tutorial/tutorial/tutorial.component';
import { HomeComponent } from './components/Home/home/home.component';
import { AppDetailsComponent } from './components/appDetails/app-details/app-details.component';
import { AllAppsComponent } from './components/allApps/all-apps/all-apps.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search/:keyword', component: HomeComponent },
  { path: 'android', component: AndroidAppsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'iphone', component: IphoneAppsComponent },
  { path: 'app/:id', component: AppDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
