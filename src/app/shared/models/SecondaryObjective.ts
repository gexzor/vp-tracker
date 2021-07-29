export interface SecondaryObjective {
  name: string;
  description?: string;
  points: number;
  faction?: string[];
  category:
    | 'Purge The Enemy'
    | 'No mercy, no respite'
    | 'Battlefield Supremecy'
    | 'Shadow Operations'
    | 'Warpcraft';
  type: 'End Game' | 'Progressive' | 'Progressive and End Game';
}
