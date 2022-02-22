import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';

import { withLayout } from '../../loyout/Layout';

import { firstLevelCategory } from '../../helpers/helpers';

import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

function Type({ firstCategory }: TypeProps) {
  // console.log('menu in Type', menu);
  return <>Its Type: {firstLevelCategory[firstCategory].name} </>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelCategory.map((category) => `/${category.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }) => {
  const firstCategoryItem = firstLevelCategory.find((category) => category.route === params.type);

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id,
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
