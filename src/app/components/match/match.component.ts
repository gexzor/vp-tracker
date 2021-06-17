import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GXPM } from 'src/app/shared/models/ChartData';
import { ChartUnit } from 'src/app/shared/models/ChartUnit';
import { MatchData } from 'src/app/shared/models/MatchData';
import { MatchService } from 'src/app/shared/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  public matchId: string;
  public matchData$: Observable<MatchData>;
  public match: MatchData;
  public goldAdvantage = new Array<GXPM>();
  public xpAdvantage = new Array<GXPM>();
  public chartUnits: typeof ChartUnit = ChartUnit;
  private subsriptions: Subscription[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) {
    this.matchId = this.activatedRoute.snapshot.params.id;
    this.matchData$ = this.matchService.getMatchData(this.matchId);
    this.subsriptions = [];
    this.match = {} as MatchData;
  }

  ngOnInit(): void {
    this.subsriptions.push(
      this.matchData$.subscribe({
        next: (matchData) => {
          this.match = matchData as MatchData;
          this.goldAdvantage = this.convertToChartData(
            matchData.radiant_gold_adv
          );
          this.xpAdvantage = this.convertToChartData(matchData.radiant_xp_adv);
        },
        error: (error: Error) => console.log(error),
      })
    );
  }

  public convertToChartData(values: number[]): GXPM[] {
    return [
      ...values.map(
        (value: number, index): GXPM => {
          return { minute: index, value };
        }
      ),
    ];
  }
}
