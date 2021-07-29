import { SecondaryObjective } from 'src/app/shared/models/SecondaryObjective';

export const SEC_OB_DATA: SecondaryObjective[] = [
  {
    name: 'Assassinate',
    description:
      'Score 3 victory points at the end of the battle for each enemy CHARACTER model that is destroyed.',
    type: 'End Game',
    points: 3,
    category: 'Purge The Enemy',
  },
  {
    name: 'Bring It Down',
    description:
      'Score 2 victory points at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 10 or less that is destroyed, and 3 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 11 or more that is destroyed.',
    type: 'End Game',
    points: 2,
    category: 'Purge The Enemy',
  },
  {
    name: 'Titan Slayers',
    description:
      'Score 10 victory points at the end of the battle if one enemy TITANIC model is destroyed, or 15 victory points if two or more enemy TITANIC models are destroyed.',
    type: 'End Game',
    points: 10,
    category: 'Purge The Enemy',
  },
  {
    name: 'Slay The Warlord',
    description:
      'Score 6 victory points at the end of the battle if the enemy WARLORD is destroyed.',
    type: 'End Game',
    points: 10,
    category: 'Purge The Enemy',
  },

  {
    name: 'Investigate Sites',
    description:
      'Score 3 victory points each time a unit from your army successfully completes the following action: Investigate Site (Action): One INFANTRY unit (excluding CHARACTERS) from your army can start to perform this action at the end of your Movement phase if it is within 6" of the centre of the battlefield and no enemy units (excluding AIRCRAFT) are within 6" of the centre of the battlefield. The Action is completed at the end of your turn.',
    type: 'End Game',
    points: 3,
    category: 'Shadow Operations',
  },
  {
    name: 'Repair Teleport Homer',
    description:
      'Score 5 victory points each time a unit from your army successfully completes the following action: Repair Teleport Homer (Action): One INFANTRY unit from your army can start to perform this action at the end of your Movement phase if it is wholly within your opponent&quots deployment zone. The Action is completed at the end of your next Command phase provided the unit attempting it is still wholly within your opponent&quots deployment zone.',
    type: 'End Game',
    points: 5,
    category: 'Shadow Operations',
  },
  {
    name: 'Raise The Banners High',
    description:
      'If you select this objective, then units in your army can perform the following action: Raise Banners (Action): One or more INFANTRY units from your army can start to perform this action at the end of your Movement phase. Each unit from your army that starts to perform this action must be in range of a different objective marker that does not have one of your banners raised upon it (see below). A unit cannot start this action while there are any enemy units (excluding AIRCRAFT) in range of the same objective marker. The Action is completed at the end of your turn. If this Action is successfully completed, that objective marker is said to have one of your army’s banners raised on it (the banner is ‘removed’ if your opponent controls the objective marker at the start of any phase). You score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised upon it.',
    type: 'Progressive and End Game',
    points: 1,
    category: 'Shadow Operations',
  },
];
