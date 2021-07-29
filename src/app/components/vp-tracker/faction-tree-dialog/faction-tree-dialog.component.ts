import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FactionNode } from 'src/app/shared/models/FactionNode';
import { FactionTreeDialogData } from '../vp-tracker.component';
import { FACTION_DATA } from './mock-data';

@Component({
  selector: 'app-faction-tree-dialog',
  templateUrl: './faction-tree-dialog.component.html',
  styleUrls: ['./faction-tree-dialog.component.scss'],
})
export class FactionTreeDialogComponent implements OnInit {
  treeControl = new NestedTreeControl<FactionNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FactionNode>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: FactionTreeDialogData) {
    this.dataSource.data = FACTION_DATA;
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: FactionNode) =>
    !!node.children && node.children.length > 0;

  /**
   * Sets the faction as selcted by the user.
   */
  setFaction(faction: FactionNode) {
    return faction;
  }
}
