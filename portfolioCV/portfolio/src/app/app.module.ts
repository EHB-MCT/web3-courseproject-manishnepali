import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ExploreComponent } from './explore/explore.component';
import { ProgramingComponent } from './programing/programing.component';
import { FooterComponent } from './footer/footer.component';
import { DesignComponent } from './design/design.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ExploreComponent,
    ProgramingComponent,
    FooterComponent,
    DesignComponent,
    AboutmeComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
