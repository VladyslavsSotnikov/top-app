import { Advantages, HTag, PTag, Tag } from '../../components';
import { HhData } from '../../components/HhData/HhData';

import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

import classes from './TopPageComponent.module.css';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  console.log('page.advantages', page);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <HTag tag='h1'>{page.title}</HTag>
        {products && (
          <Tag color='grey' size='m'>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>Продукты: {products && products.length}</div>
      <div className={classes.hhTitle}>
        <HTag tag='h2'>Вакансии - {page.category}</HTag>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <div className={classes.advantages}>
          <HTag tag='h2'>Преимущества</HTag>
          <Advantages advantages={page.advantages} />
          {page.seoText && <div className={classes.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
          <HTag tag='h2'>Получаемые навыки</HTag>
          {page.tags.map((tag) => (
            <Tag key={tag} color='primary'>
              {tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};
