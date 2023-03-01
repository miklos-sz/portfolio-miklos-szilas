import { HeaderType, PageType } from 'types';

export const mockPageData: PageType = {
  slug: 'home',
  title: 'Miklós Szilas',
  sys: {
    id: 'test-id',
  },
};

export const mockHeaderData: HeaderType = {
  logo: {
    url: 'https://via.placeholder.com/500',
    width: 500,
    height: 500,
    title: 'Site title',
    description: 'description',
  },
  nav: {
    items: [
      {
        title: 'first item',
        slug: 'firstitem',
      },
      {
        title: 'second item',
        slug: 'seconditem',
      },
      {
        title: 'third item',
        slug: 'thirditem',
      },
    ],
  },
  socialCollection: {
    items: [
      {
        url: 'https://via.placeholder.com/40',
        width: 40,
        height: 40,
        title: 'social-1',
        description: 'social-icon-1',
      },
      {
        url: 'https://via.placeholder.com/40',
        width: 40,
        height: 40,
        title: 'social-2',
        description: 'social-icon-2',
      },
      {
        url: 'https://via.placeholder.com/40',
        width: 40,
        height: 40,
        title: 'social-3',
        description: 'social-icon-3',
      },
    ],
  },
};
