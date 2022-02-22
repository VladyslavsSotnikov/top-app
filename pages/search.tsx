import axios from 'axios';
import { GetStaticProps } from 'next';
import { firstLevelCategory } from '../helpers/helpers';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import { withLayout } from '../loyout/Layout';

function Search() {
  return <>Its searsh</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async ({ params }) => {
  const firsCategoryItem = firstLevelCategory.find((category) => category.route === params.type);
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firsCategoryItem.id,
  });

  return {
    props: {
      menu,
      firstCategory: firsCategoryItem.id,
    },
  };
};

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
