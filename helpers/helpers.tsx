import { FirstLevelCategory } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

import CousesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BookIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

export const firstLevelCategory: FirstLevelCategory[] = [
  { route: 'courses', name: 'Kурсы', icon: <CousesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const priceRu = (price: number): string => {
  const formattedPrice = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');
  return formattedPrice;
};
