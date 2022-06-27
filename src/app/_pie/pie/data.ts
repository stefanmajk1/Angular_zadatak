import { formatDate } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Member } from 'src/app/_models/member';
import { ApiService } from 'src/app/_services/api.service';
export class Data {
  members: Member[] = [];
  members1: Member[] = [];
  constructor(private api: ApiService) {}

  authorForm!: FormGroup;
}

export function getData(): any[] {
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
  this.member1 = this.members;

  return this.member1;
}
