import { IconType } from 'react-icons';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export interface INavIcons {
  icon: IconType;
  label: string;
}

export const navIcons: INavIcons[] = [
  { icon: HiMenuAlt3, label: 'open' },
  { icon: HiX, label: 'close' },
];
