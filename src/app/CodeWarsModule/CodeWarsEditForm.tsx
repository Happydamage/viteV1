import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnCodeWarsEditForm = cn('CodeWarsEditForm');

export const CodeWarsEditForm: FC = () => {
  return <div className={cnCodeWarsEditForm()}></div>;
};
