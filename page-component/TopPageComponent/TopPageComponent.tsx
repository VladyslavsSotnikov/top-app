import { TopPageComponentProps } from './TopPageComponent.props';
import classes from './TopPageComponent.module.css';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
