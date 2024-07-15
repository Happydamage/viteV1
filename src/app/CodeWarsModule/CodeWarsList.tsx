import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import { CodeWarsModel } from './models/CodeWarsModel.ts';
import { CodeWarsServices } from './services/CodeWarsServices.ts';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  const [data, setData] = useState<CodeWarsModel[]>([]);

  // useEffect(() => {
  //   const getData = async (): Promise<void> => {
  //     const resp = await CodeWarsServices.list();
  //
  //     if (resp) {
  //       setData(resp);
  //     }
  //   };
  // }, []);

  return (
    <Box className={cnCodeWarsList(undefined, [props.className])}>
      {data.map((el) => (
        <CodeWarsItem
          userId={el.id}
          id={el.userId}
          title={el.title}
          completed={el.completed}
        />
      ))}
    </Box>
  );
};
