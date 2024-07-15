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

const cnCodeWarsItem = cn('CodeWarsItem');

interface CodeWarsItemProps extends CodeWarsModel {
  className?: string;
}

export const CodeWarsItem: FC<CodeWarsItemProps> = (props) => {
  return (
    <Card
      className={cnCodeWarsItem(undefined, [props.className])}
      sx={{ maxWidth: 345, position: 'relative' }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={'center'}
          position={'absolute'}
          zIndex={0}
          sx={{ opacity: 0.5, bottom: 0 }}
        >
          {props.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.userId}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginTop={1}>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant={'contained'}>
          Edit
        </Button>
        <Button size="small" variant={'outlined'}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
