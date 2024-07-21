import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import { CodeWarsModel } from './models/CodeWarsModel.ts';
import { CodeWarsServices } from './services/CodeWarsServices.ts';
import { Unstable_Grid2 as Grid } from '@mui/material';
import './styles/CodeWarsList.scss';
const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  const [data, setData] = useState<CodeWarsModel[]>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const resp = await CodeWarsServices.list();

      if (resp) {
        setData(resp);
      }
    };

    void getData();
  }, []);

  return (
    <Grid
      className={cnCodeWarsList(undefined, [props.className])}
      container
      spacing={2}
    >
      {data.map((el, index) => (
        <Grid xs={3} key={index + 1}>
          <CodeWarsItem
            userId={index + 1}
            title={el.title}
            completed={el.completed}
          />
        </Grid>
      ))}
    </Grid>
  );
};
