import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  return (
    <Box className={cnCodeWarsList(undefined, [props.className])}>
      <div></div>
    </Box>
  );
};
