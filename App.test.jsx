import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // Mock the font loading link creation
    vi.spyOn(document.head, 'appendChild').mockImplementation(() => {});

    // Mock the fetch API for callGemini
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          candidates: [
            {
              content: {
                parts: [{ text: "Mocked Gemini Response" }]
              }
            }
          ]
        })
      })
    );
  });

  it('renders initial state correctly and sets isLoaded', async () => {
    render(<App />);

    // Verify main components render
    expect(screen.getByText('Gabriel Paiva')).toBeInTheDocument();
    expect(screen.getByText('Works')).toBeInTheDocument();
    expect(screen.getAllByText('Inquiries').length).toBeGreaterThan(0);

    // Verify that the title appears with the loaded class (opacity-100) after useEffect runs
    await waitFor(() => {
      const titleContainer = screen.getByText('Gabriel Paiva').parentElement;
      expect(titleContainer).toHaveClass('opacity-100');
    });
  });

  it('updates nav background on scroll', () => {
    render(<App />);

    // Initially nav shouldn't have the scrolled background class
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('bg-black/80');

    // Simulate scroll past 100px using proper jsdom workaround
    Object.defineProperty(window, 'scrollY', { value: 150, configurable: true });
    fireEvent.scroll(window);

    // Nav should now have the scrolled classes
    expect(nav).toHaveClass('bg-black/80');

    // Simulate scroll back to top
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    fireEvent.scroll(window);

    // Nav should no longer have the scrolled classes
    expect(nav).not.toHaveClass('bg-black/80');
  });

  it('toggles formActive state when form elements are focused/blurred', async () => {
    render(<App />);

    const nameInput = screen.getByPlaceholderText('Your Name');

    // Instead of querying by complex tailwind classes, let's query the specific container
    // The blur element is the previous sibling to the div containing the form.
    // However, an easier way is to just grab the element that has the transitions based on formActive
    const inqSection = document.getElementById('inquiries');
    const blurElement = inqSection.querySelector('.rounded-full.transition-all');

    // Initially not active (scale-90)
    expect(blurElement).toHaveClass('scale-90');

    // Focus the input
    await userEvent.click(nameInput);

    // Should be active (scale-100)
    expect(blurElement).toHaveClass('scale-100');

    // Blur the input
    fireEvent.blur(document.querySelector('form[name="inquiries"]'));

    // Should be inactive again (scale-90)
    expect(blurElement).toHaveClass('scale-90');
  });

  it('updates mouse position on mouse move', () => {
    render(<App />);

    const backlight = document.querySelector('.cursor-backlight');
    expect(backlight).toBeInTheDocument();

    // Simulate mouse move
    fireEvent.mouseMove(window, { clientX: 500, clientY: 600 });

    // Verify the transform style is updated (500 - 300 = 200, 600 - 300 = 300)
    expect(backlight).toHaveStyle('transform: translate(200px, 300px)');
  });
});
