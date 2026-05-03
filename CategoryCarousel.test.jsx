import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { CategoryCarousel } from './App';

const mockItems = [
  { id: '1', title: 'First Item', url: '/img1.jpg', orientation: 'landscape' },
  { id: '2', title: 'Second Item', url: '/img2.jpg', orientation: 'portrait' },
  { id: '3', title: 'Third Item', url: '/img3.jpg', orientation: 'landscape' },
];

describe('CategoryCarousel', () => {
  test('renders the initial item correctly', () => {
    const { container } = render(<CategoryCarousel category="Test Category" items={mockItems} />);

    expect(screen.getByText('Test Category')).toBeInTheDocument();

    // Test the active item visually via DOM presence since desktop renders only one active element
    // Desktop view item
    const desktopImg = container.querySelector('.hidden.md\\:flex img');
    expect(desktopImg).toHaveAttribute('src', '/img1.jpg');
    expect(desktopImg).toHaveAttribute('alt', 'First Item');

    // Desktop text
    const desktopText = container.querySelector('.hidden.md\\:flex h3');
    expect(desktopText).toHaveTextContent('First Item');
  });

  test('navigates to the next slide and wraps around', () => {
    const { container } = render(<CategoryCarousel category="Test Category" items={mockItems} />);

    // Find the next button (the second chevron button)
    const nextButton = container.querySelector('.lucide-chevron-right').closest('button');

    // Click to go to second item
    fireEvent.click(nextButton);
    expect(container.querySelector('.hidden.md\\:flex img')).toHaveAttribute('src', '/img2.jpg');
    expect(container.querySelector('.hidden.md\\:flex h3')).toHaveTextContent('Second Item');

    // Click to go to third item
    fireEvent.click(nextButton);
    expect(container.querySelector('.hidden.md\\:flex img')).toHaveAttribute('src', '/img3.jpg');
    expect(container.querySelector('.hidden.md\\:flex h3')).toHaveTextContent('Third Item');

    // Click to wrap around to first item
    fireEvent.click(nextButton);
    expect(container.querySelector('.hidden.md\\:flex img')).toHaveAttribute('src', '/img1.jpg');
    expect(container.querySelector('.hidden.md\\:flex h3')).toHaveTextContent('First Item');
  });

  test('navigates to the previous slide and wraps around', () => {
    const { container } = render(<CategoryCarousel category="Test Category" items={mockItems} />);

    // Find the previous button (the first chevron button)
    const prevButton = container.querySelector('.lucide-chevron-left').closest('button');

    // Initially on First Item (1 / 3)
    // Click previous to wrap around to third item
    fireEvent.click(prevButton);
    expect(container.querySelector('.hidden.md\\:flex img')).toHaveAttribute('src', '/img3.jpg');
    expect(container.querySelector('.hidden.md\\:flex h3')).toHaveTextContent('Third Item');

    // Click previous to go to second item
    fireEvent.click(prevButton);
    expect(container.querySelector('.hidden.md\\:flex img')).toHaveAttribute('src', '/img2.jpg');
    expect(container.querySelector('.hidden.md\\:flex h3')).toHaveTextContent('Second Item');

    // Click previous to go to first item
    fireEvent.click(prevButton);
    expect(container.querySelector('.hidden.md\\:flex img')).toHaveAttribute('src', '/img1.jpg');
    expect(container.querySelector('.hidden.md\\:flex h3')).toHaveTextContent('First Item');
  });

  test('handles singleton (1 item) correctly', () => {
     const { container } = render(<CategoryCarousel category="Singleton Category" items={[mockItems[0]]} />);

     const desktopText = container.querySelector('.hidden.md\\:flex .text-\\[10px\\]');
     expect(desktopText).toHaveTextContent('Singleton');
  });

  test('handles empty items array by rendering nothing', () => {
    const { container } = render(<CategoryCarousel category="Empty Category" items={[]} />);
    expect(container.firstChild).toBeNull();
  });
});