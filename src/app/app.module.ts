import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobIdComponent } from './job-id/job-id.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { HighchartsChartModule } from 'highcharts-angular';
import { RecentActivitiesComponent } from './recent-activities/recent-activities..component';
import { DailyJobStatusComponent } from './daily-job-status/daily-job-status.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobIdComponent,
    JobStatusComponent,
    RecentActivitiesComponent,
    DailyJobStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    ChartModule,
    HighchartsChartModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
