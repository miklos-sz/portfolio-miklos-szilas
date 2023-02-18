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
