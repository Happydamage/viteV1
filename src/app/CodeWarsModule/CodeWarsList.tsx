import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import { CodeWarsItem } from './CodeWarsItem.tsx';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  return (
    <Box className={cnCodeWarsList(undefined, [props.className])}>
      <CodeWarsItem
        id={1}
        result={''}
        task={
          'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
          'species, ranging across all continents except Antarctica'
        }
        hashtag={'Array'}
      />
    </Box>
  );
};
