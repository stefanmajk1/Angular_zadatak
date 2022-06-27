import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {
  AccumulationChartModule,
  PieSeriesService,
} from '@syncfusion/ej2-angular-charts';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { IgxPieChartModule, IgxLegendModule } from 'igniteui-angular-charts';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PieComponent } from './_pie/pie/pie.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
@NgModule({
  declarations: [AppComponent, MembersComponent, PieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AccumulationChartModule,
    FormsModule,
    ReactiveFormsModule,
    AgChartsAngularModule,
    NgChartsModule,
    HttpClientJsonpModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
