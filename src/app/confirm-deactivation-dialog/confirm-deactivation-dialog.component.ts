import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'trm-confirm-deactivation-dialog',
  templateUrl: './confirm-deactivation-dialog.component.html',
  styleUrls: ['./confirm-deactivation-dialog.component.css']
})
export class ConfirmDeactivationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeactivationDialogComponent>) { }

  ngOnInit() {
  }

}
