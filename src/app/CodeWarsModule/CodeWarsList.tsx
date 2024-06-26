import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnCodeWarsList = cn('CodeWarsList');

export const CodeWarsList: FC = () => {
  return <div className={cnCodeWarsList()}></div>;
};
