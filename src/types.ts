export interface PageType {
  slug: string;
  title: string;
  description?: string;
  sys: {
    id: string;
  };
}

export interface PagesType {
  items: [pages: PageType];
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
  title: string;
  description?: string;
}

export interface NavItemType {
  title: string;
  slug: string;
}
export interface NavItemsType {
  items: NavItemType[];
}

export interface HeaderType {
  logo?: ImageType;
  nav?: NavItemsType;
  socialCollection?: {
    items: ImageType[];
  };
}

export interface HeroType {
  title: string;
  subtitle?: string;
  content?: {
    json: JSON;
  };
  image?: ImageType;
  imageMobile?: ImageType;
  appearsOnPage?: string;
}

export type ViewportType = {
  width: number | undefined;
  name: 'mobile' | 'largeMobile' | 'tablet' | 'desktop' | undefined;
};

export type BrandColors = 'primary' | 'secondary' | 'light' | 'dark';

export type SkillType = {
  title: string;
  titleIcon: ImageType;
  description: {
    json: JSON;
  };
  iconsCollection: {
    items: ImageType[];
  };
};

export type SkillsType = SkillType[];

export type ContentsType = SkillsType; // to be extended as union, when new content types implemented
