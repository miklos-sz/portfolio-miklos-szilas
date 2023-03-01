import '@testing-library/jest-dom';
import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { mockHeaderData, mockPageData } from 'mock/mockData';
import { HeaderType } from 'types';
import Header from './Header';

describe('Header tests with mocked props', () => {
  test('should render the Header properly with default mock props', () => {
    render(<Header data={mockHeaderData} siteTitle={mockPageData.title} />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('should render child components properly with default mock props, passed by Header', () => {
    render(<Header data={mockHeaderData} siteTitle={mockPageData.title} />);

    const header = screen.getByTestId('header');
    const brand = screen.getByTestId('brand');
    const nav = screen.getByTestId('nav');
    const social = screen.getByTestId('social');

    expect(header).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(social).toBeInTheDocument();
  });

  test('should render the Header properly, if props has missing data for Brand component', () => {
    type HeaderDataWithoutBrand = Omit<HeaderType, 'logo'>;
    const mockHeaderDatawithoutBrand: HeaderDataWithoutBrand = {
      nav: mockHeaderData.nav,
      socialCollection: mockHeaderData.socialCollection,
    };

    render(
      <Header
        data={mockHeaderDatawithoutBrand}
        siteTitle={mockPageData.title}
      />,
    );

    const brand = screen.queryByTestId('brand');
    expect(brand).toBeNull;
  });

  test('should render the Header properly, if props has missing data for Nav component', () => {
    type HeaderDataWithoutNav = Omit<HeaderType, 'nav'>;
    const mockHeaderDatawithoutBrand: HeaderDataWithoutNav = {
      logo: mockHeaderData.logo,
      socialCollection: mockHeaderData.socialCollection,
    };

    render(
      <Header
        data={mockHeaderDatawithoutBrand}
        siteTitle={mockPageData.title}
      />,
    );

    const nav = screen.queryByTestId('nav');
    expect(nav).toBeNull;
  });

  test('should render the Header properly, if props has missing data for Social component', () => {
    type HeaderDataWithoutSocial = Omit<HeaderType, 'social'>;
    const mockHeaderDataWithoutSocial: HeaderDataWithoutSocial = {
      nav: mockHeaderData.nav,
      logo: mockHeaderData.logo,
    };

    render(
      <Header
        data={mockHeaderDataWithoutSocial}
        siteTitle={mockPageData.title}
      />,
    );

    const social = screen.queryByTestId('social');
    expect(social).toBeNull;
  });
});
