import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { Members } from '../_models/members';
import { ApiService } from '../_services/api.service';
import { ChartData, ChartOptions } from 'chart.js';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  member: Members[] = [];
  vremeNesto: number[];

  p: number = 1;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getMembers();
  }
  authorForm!: FormGroup;
  getMembers() {
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
  manjeOdStoSati(startDateTime, endDateTime) {
    var condition = this.calculateDiff(startDateTime, endDateTime);

    if (condition > 100) {
      return true;
    } else {
      return false;
    }
  }

  calculateDiff(startDateTime, endDateTime) {
    let time1 = formatDate(startDateTime, 'h:mm', 'en-US');
    let time2 = formatDate(endDateTime, 'h:mm', 'en-US');

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

    return vreme;
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
}
