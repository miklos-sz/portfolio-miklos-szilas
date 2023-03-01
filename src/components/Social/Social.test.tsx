import '@testing-library/jest-dom';
import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { mockHeaderData, mockPageData } from 'mock/mockData';
import Social from './Social';

describe('Social block tests', () => {
  test('should render the Social properly with default mock props', () => {
    render(
      <Social
        items={mockHeaderData.socialCollection?.items || []}
        siteTitle={mockPageData.title}
      />,
    );
    const social = screen.getByTestId('social');
    expect(social).toBeInTheDocument();
  });

  test('should render the Social properly with custom mock props', () => {
    const customItems = [
      {
        url: 'https://via.placeholder.com/20',
        width: 20,
        height: 20,
        title: 'custom-social-1',
        description: 'custom-social-icon-1',
      },
      {
        url: 'https://via.placeholder.com/20',
        width: 20,
        height: 20,
        title: 'custom-social-2',
        description: 'custom-social-icon-2',
      },
      {
        url: 'https://via.placeholder.com/20',
        width: 20,
        height: 20,
        title: 'custom-social-3',
        description: 'custom-social-icon-3',
      },
    ];

    const customSiteTitle = 'Custom Site Title';

    render(<Social items={customItems || []} siteTitle={customSiteTitle} />);

    const social = screen.getByTestId('social');
    const customSocial1 = screen.getByAltText('custom-social-1');

    expect(social).toBeInTheDocument();
    expect(customSocial1).toBeInTheDocument();
  });
});
