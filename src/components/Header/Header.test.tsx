import '@testing-library/jest-dom';
import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { mockHeaderData, mockPageData } from 'mock/mockData';
import Header from './Header';

describe('Header tests', () => {
  test('should render the Header properly with default mock props', () => {
    render(<Header data={mockHeaderData} siteTitle={mockPageData.title} />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
