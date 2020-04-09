import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressBarModule, MatListModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SlideshowModule} from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { ScrollableInfoComponent } from './scrollable-info/scrollable-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableInfoComponent,
    NavBarComponent,
    BannerComponent,
    AboutMeComponent,
    MySkillsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideshowModule,
    MatProgressBarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
