import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import classes from './Layout.module.css';
import cn from 'classnames';
import { FunctionComponent } from 'react';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Header className={classes.header} />
      <Sidebar className={classes.sidebar} />
      <div className={classes.body}>{children}</div>
      <Footer className={classes.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
