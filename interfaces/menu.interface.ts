import { ReactNode } from 'react';
import { TopLevelCategory } from './page.interface';

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelCategory {
  route: string;
  name: string;
  icon: ReactNode;
  id: TopLevelCategory;
}
