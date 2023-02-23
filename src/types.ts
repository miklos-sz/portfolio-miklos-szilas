export interface Page {
  slug: string;
  title: string;
  description?: string;
  sys: {
    id: string;
  };
}

export interface Pages {
  items: [pages: Page];
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
}

export interface HeroType {
  title: string;
  subtitle?: string;
  content?: {
    json: any;
  };
  image?: ImageType;
  imageMobile?: ImageType;
  appearsOnPage?: string;
}
