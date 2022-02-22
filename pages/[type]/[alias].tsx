import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelCategory } from '../../helpers/helpers';
import { MenuItem } from '../../interfaces/menu.interface';

import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../loyout/Layout';

function Courses({ products }: CoursesProps) {
  return <>{products && products.length}</>;
}

export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelCategory) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id,
    });
    paths = paths.concat(menu.flatMap((menuItem) => menuItem.pages.map((page) => `/${m.route}/${page.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CoursesProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firsCategoryItem = firstLevelCategory.find((category) => category.route === params.type);

  if (!firsCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firsCategoryItem.id,
    });

    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    );

    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10,
    });

    return {
      props: {
        menu,
        firstCategory: firsCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
