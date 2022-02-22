import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';

import { Button, HTag, PTag, Rating, Tag } from '../components';

import { withLayout } from '../loyout/Layout';

import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

function Home() {
  const [rating, setRating] = useState(4);

  return (
    <>
      <HTag tag='h1'>Text</HTag>

      <Button appearance='primary' arrow='right'>
        Learn more
      </Button>

      <PTag size='s'>Lorem ipsum</PTag>

      <Tag color='red' size='m'>
        10
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
