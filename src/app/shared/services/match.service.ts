import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MatchData } from '../models/MatchData';


@Injectable({
    providedIn: 'root'
})

export class MatchService {
    private apiEndpoint = '/matches/';

    constructor(private http: HttpClient) {
    }

    public getMatchData(matchId: string): Observable<MatchData> {
        return this.http.get<MatchData>(environment.databaseURL + this.apiEndpoint + matchId)
            .pipe(map((response: any) => {
                const matchData: MatchData = {
                    match_id: response.match_id,
                    dire_score: response.dire_score,
                    radiant_score: response.radiant_score,
                    duration: response.duration,
                    first_blood_time: response.first_blood_time,
                    radiant_win: response.radiant_win,
                    radiant_gold_adv: response.radiant_gold_adv,
                    radiant_xp_adv: response.radiant_xp_adv,
                };
                return matchData;
            }));
    }

}
