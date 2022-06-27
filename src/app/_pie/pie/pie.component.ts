import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Members } from 'src/app/_models/members';
import { AgChartOptions } from 'ag-charts-community';
import { ApiService } from 'src/app/_services/api.service';
import { Member } from 'src/app/_models/member';
import { getData } from './data';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  template: `<ag-charts-angular
    style="height: 100%"
    [options]="options"
  ></ag-charts-angular> `,
  styleUrls: ['./pie.component.css'],
})
export class PieComponent {
  public options: AgChartOptions;
  members: Member[] = [];

  constructor(private api: ApiService) {
    this.options = {
      data: this.getData1(),
      series: [
        {
          type: 'pie',
          angleKey: 'revenue',
          labelKey: 'month',
        },
      ],
    };
  }
  getData(): any {
    this.api.getMembers().subscribe((res) => {
      this.members = res;
      this.members.forEach((element) => {
        let time1 = formatDate(element.StarTimeUtc, 'h:mm', 'en-US');
        let time2 = formatDate(element.EndTimeUtc, 'h:mm', 'en-US');

        var broj = time1,
          toString = broj.toString(),
          toConcat = broj + '';

        var broj2 = time2,
          toString = broj.toString(),
          toConcat = broj2 + '';

        var y = parseInt(broj);
        var x = parseInt(broj2);

        var vreme = y - x;

        vreme = vreme * 20;
        vreme = Math.abs(vreme);

        element.vreme = vreme;
      });
    });
  }

  ngOnInit(): void {}

  getData1(): any[] {
    return [
      {
        month: 'Abhay Singh',
        revenue: 0,
      },
      {
        month: 'Patrick Huthinson',
        revenue: 0,
      },
      {
        month: 'Abhay Singh',
        revenue: 0,
      },
      {
        month: 'Abhay Singh',
        revenue: 0,
      },
      {
        month: 'Kavvay Verma',
        revenue: 0,
      },
    ];
  }
}
