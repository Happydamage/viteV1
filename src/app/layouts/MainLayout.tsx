import { cn } from '@bem-react/classname';

const cnMainLayout = cn('MainLayout');

export const MainLayout = () => {
  return (
    <div className={cnMainLayout()}>
      <div className={cnMainLayout('Header')}></div>
      <div className={cnMainLayout('Sidebar')}></div>
      <div className={cnMainLayout('Content')}></div>
      <div className={cnMainLayout('Footer')}></div>
    </div>
  );
};
