import { FooterProps } from './Footer.props';
import classes from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(classes.footer, className)} {...props}>
      <p>OwlTop © 2020 - 2021 Все права защищены</p>
      <a href='#'>Пользовательское соглашение</a>
      <a href='#'>Политика конфиденциальности</a>
    </footer>
  );
};
