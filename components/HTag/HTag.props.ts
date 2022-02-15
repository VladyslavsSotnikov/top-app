import { ReactNode } from 'react';

export interface HTagProps {
   tag: 'h1' | 'h2' | 'h3';
   children: ReactNode;
}
