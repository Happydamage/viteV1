import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsList } from './CodeWarsList.tsx';

const cnCodeWarsModule = cn('CodeWarsModule');

export const CodeWarsModule: FC = () => {
  return (
    <div className={cnCodeWarsModule()}>
      <CodeWarsList />
    </div>
  );
};
