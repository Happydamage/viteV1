import { FC } from 'react';
import { cn } from '@bem-react/classname';
import './styles/CodeWarsItem.scss';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { CodeWarsModel } from './models/CodeWarsModel.ts';
import { CodeWarsServices } from './services/CodeWarsServices.ts';

const cnCodeWarsItem = cn('CodeWarsItem');

interface CodeWarsItemProps extends CodeWarsModel {
  className?: string;
}

export const CodeWarsItem: FC<CodeWarsItemProps> = (props) => {
  const create = async (): Promise<void> => {
    await CodeWarsServices.create({
      userId: 123,
      title: '123',
      completed: true,
    });
  };

  return (
    <Card
      className={cnCodeWarsItem(undefined, [props.className])}
      sx={{ position: 'relative', height: 150 }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={'center'}
          position={'absolute'}
          zIndex={0}
          sx={{ opacity: 0.5, right: 8, top: 0 }}
        >
          {props.userId}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginTop={1}>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Button size="small" variant={'contained'} onClick={() => create()}>
          Edit
        </Button>
        <Button size="small" variant={'outlined'}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
