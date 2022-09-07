import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { IphoneAppsComponent } from './components/iphoneApps/iphone-apps/iphone-apps.component';
import { GamesComponent } from './components/games/games/games.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SliderComponent } from './components/slider/slider/slider.component';
import { AboutUsComponent } from './components/aboutUs/about-us/about-us.component';
import { HomeComponent } from './components/Home/home/home.component';
import { AndroidAppsComponent } from './components/androidApps/android-apps/android-apps.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AllAppsComponent } from './components/allApps/all-apps/all-apps.component';
import { TutorialComponent } from './components/tutorial/tutorial/tutorial.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './services/notification.service';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { UserComponent } from './components/user/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppDetailsComponent } from './components/appDetails/app-details/app-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AndroidAppsComponent,
    IphoneAppsComponent,
    GamesComponent,
    FooterComponent,
    SliderComponent,
    AboutUsComponent,
    HomeComponent,
    AllAppsComponent,
    TutorialComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SlickCarouselModule ,
    ReactiveFormsModule,
   
    NotificationModule
  ],
  providers: [AuthenticationService,UserService,AuthenticationGuard,NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
