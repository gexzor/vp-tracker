import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Round } from 'src/app/shared/models/PointsByRound';
import { SecondaryObjective } from 'src/app/shared/models/SecondaryObjective';
import { FactionNode } from '../../shared/models/FactionNode';
import { FactionTreeDialogComponent } from './faction-tree-dialog/faction-tree-dialog.component';
import { SecondaryObjectivesDialogComponent } from './secondary-objectives-dialog/secondary-objectives-dialog.component';
export interface FactionTreeDialogData {
  faction?: FactionNode;
}

@Component({
  selector: 'app-vp-tracker',
  templateUrl: './vp-tracker.component.html',
  styleUrls: ['./vp-tracker.component.scss'],
})
export class VpTrackerComponent implements OnInit {
  public rounds = new Array<Round>();
  public faction: FactionNode;
  public victoryPoints = 0;
  public objectives: SecondaryObjective[];

  constructor(public dialog: MatDialog) {
    // Create 5 empty rounds
    for (let index = 0; index < 5; index++) {
      this.rounds.push({ roundNumber: index, points: -1 });
    }
  }

  ngOnInit() {}

  public updateRound(roundNumber: number, points: number): void {
    this.rounds[roundNumber].points = points;
    this.victoryPoints = this.rounds.reduce(
      // Round points are initiated with -1. If so, interpret as 0 points
      (sum, current) => sum + (current.points < 0 ? 0 : current.points),
      0
    );
  }

  /**
   * Opens the faction tree dialog.
   */
  public openFactionTreeDialog() {
    this.dialog
      .open(FactionTreeDialogComponent, {
        data: {
          faction: this.faction,
        },
        panelClass: ['custom-dialog'],
        minWidth: '375px',
      })
      .afterClosed()
      .subscribe((result: FactionNode) => {
        this.faction = result;
      });
  }

  /**
   * Opens the dialog containing secondary objectives.
   */
  public openSecObjsDialog() {
    this.dialog
      .open(SecondaryObjectivesDialogComponent, {
        data: {
          faction: this.faction,
        },
        panelClass: ['custom-dialog'],
        backdropClass: 'darker-backdrop',
        minWidth: '375px',
      })
      .afterClosed()
      .subscribe((result: SecondaryObjective[]) => {
        this.objectives = result;
      });
  }
}
