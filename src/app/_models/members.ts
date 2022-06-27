import { formatDate } from '@angular/common';

export class Members {
  id: number;
  EmployeeName: string;
  StarTimeUtc: Date;
  EndTimeUtc: Date;
  EntryNotes: string;
  DeletedOn: Date;
  vreme: number;

  constructor() {
    let time1 = formatDate(this.StarTimeUtc, 'h:mm', 'en-US');
    let time2 = formatDate(this.EndTimeUtc, 'h:mm', 'en-US');

    var broj = time1,
      toString = broj.toString(),
      toConcat = broj + '';

    var broj2 = time2,
      toString = broj.toString(),
      toConcat = broj2 + '';

    var y = parseInt(broj);
    var x = parseInt(broj2);

    var vreme1 = y - x;

    vreme1 = vreme1 * 20;
    vreme1 = Math.abs(vreme1);

    this.vreme = vreme1;
  }
}
