import FetchData from './projects/01_data_fetch';
import BlogCard from './projects/02_blog_card';
import CardUI from './projects/03_card_ui';

export const projectMenu = [
  {
    id: '01_data_fetch',
    name: 'Data Fetching',
    component: FetchData,
  },
  {
    id: '02_blog_card',
    name: 'Blog post',
    component: BlogCard,
  },
  {
    id: '03_card_ui',
    name: 'card UI',
    component: CardUI,
  },
];
