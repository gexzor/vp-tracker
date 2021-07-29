import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FactionNode } from 'src/app/shared/models/FactionNode';
import { SecondaryObjective } from 'src/app/shared/models/SecondaryObjective';
import { SEC_OB_DATA } from './mock-objectives';

@Component({
  selector: 'app-secondary-objectives-dialog',
  templateUrl: './secondary-objectives-dialog.component.html',
  styleUrls: ['./secondary-objectives-dialog.component.scss'],
})
export class SecondaryObjectivesDialogComponent implements OnInit {
  dataSource: SecondaryObjective[];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { faction: FactionNode; objectives: SecondaryObjective[] }
  ) {
    this.dataSource = SEC_OB_DATA;
  }

  ngOnInit(): void {}
}
