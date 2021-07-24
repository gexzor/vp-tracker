import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Round } from 'src/app/shared/models/PointsByRound';
import { FactionNode } from '../../shared/models/FactionNode';

const FACTION_DATA: FactionNode[] = [
  {
    name: 'Adeptus Astartes',
    children: [
      { name: 'Ultra Marines' },
      { name: 'Space Wolves' },
      { name: 'Blood Angels' },
      { name: 'Gray Knights' },
      { name: 'Imperial Fist' },
      { name: 'Iron Hands' },
    ],
  },
];

@Component({
  selector: 'app-vp-tracker',
  templateUrl: './vp-tracker.component.html',
  styleUrls: ['./vp-tracker.component.scss'],
})
export class VpTrackerComponent implements OnInit {
  public rounds = new Array<Round>();
  public victoryPoints = 0;
  public treeControl = new NestedTreeControl<FactionNode>(
    (node) => node.children
  );
  public dataSource = new MatTreeNestedDataSource<FactionNode>();
  @ViewChild('tree') public tree: HTMLElement;

  constructor() {
    // Create 5 empty rounds
    for (let index = 0; index < 5; index++) {
      this.rounds.push({ roundNumber: index, points: -1 });
    }
    this.dataSource.data = FACTION_DATA;
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

  public hasChild = (_: number, node: FactionNode) =>
    !!node.children && node.children.length > 0;
}
