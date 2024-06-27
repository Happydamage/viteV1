import { FC } from 'react';
import { cn } from '@bem-react/classname';
import './styles/CodeWarsItem.scss';

const cnCodeWarsItem = cn('CodeWarsItem');

interface CodeWarsItemProps {
  className?: string;
}

export const CodeWarsItem: FC<CodeWarsItemProps> = (props) => {
  return <div className={cnCodeWarsItem(undefined, [props.className])}></div>;
};
