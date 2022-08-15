import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeOpsComponent } from './home-ops/home-ops.component';
import { GraphComponent } from './home-dashboard/graph/graph.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDashboardComponent,
    HomeOpsComponent,
    GraphComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
