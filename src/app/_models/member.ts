import { formatDate } from '@angular/common';

export interface Member {
  id: number;
  EmployeeName: string;
  StarTimeUtc: Date;
  EndTimeUtc: Date;
  EntryNotes: string;
  DeletedOn: Date;
  vreme: number;
}
