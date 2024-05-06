import { Component, OnInit } from '@angular/core';
import { CONTENT, TIME } from './models/appointment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private _contentService: ContentService
  ) {}

  timeRange: TIME[] = [
    { hour: 0, type: 'am' },
    { hour: 1, type: 'am' },
    { hour: 2, type: 'am' },
    { hour: 3, type: 'am' },
    { hour: 4, type: 'am' },
    { hour: 5, type: 'am' },
    { hour: 6, type: 'am' },
    { hour: 7, type: 'am' },
    { hour: 8, type: 'am' },
    { hour: 9, type: 'am' },
    { hour: 10, type: 'am' },
    { hour: 11, type: 'am' },
    { hour: 12, type: 'pm' },
    { hour: 1, type: 'pm' },
    { hour: 2, type: 'pm' },
    { hour: 3, type: 'pm' },
    { hour: 4, type: 'pm' },
    { hour: 5, type: 'pm' },
    { hour: 6, type: 'pm' },
    { hour: 7, type: 'pm' },
    { hour: 8, type: 'pm' },
    { hour: 9, type: 'pm' },
    { hour: 10, type: 'pm' },
    { hour: 11, type: 'pm' },
  ];

  selected: Date = new Date();
  content: CONTENT | null = null;

  change(event: any) {
    this.content = null;
  }

  dialogRef!: MatDialogRef<AppointmentFormComponent>;
  createAppointment() {
    this.dialogRef = this._dialog.open(AppointmentFormComponent);
  }

  ngOnInit(): void {
    this._contentService.$content.subscribe((value) => {
      this.dialogRef.close();
      this.content = value;
    });
  }

  calcMarginTop(index: number) {
    return (index + 1) * 5 + 'vh';
  }
}
