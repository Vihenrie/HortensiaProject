export type View = 'home' | 'catalog' | 'custom';

export interface NavItem {
  label: string;
  view: View;
}
