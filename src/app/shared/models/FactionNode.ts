/**
 * Faction data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface FactionNode {
  name: string;
  children?: FactionNode[];
}
