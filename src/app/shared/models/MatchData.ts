export interface MatchData {
    match_id: number;
    dire_score: number;
    radiant_score: number;
    duration: number;
    first_blood_time: number;
    radiant_win: boolean;
    radiant_gold_adv: number[];
    radiant_xp_adv: number[];
}
