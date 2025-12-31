import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '@/components/HeroSection';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, priority, ...props }: any) => {
    // Filter out Next.js-specific boolean props that aren't valid HTML attributes
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img data-fill={fill ? 'true' : undefined} data-priority={priority ? 'true' : undefined} {...props} />;
  },
}));

// Mock FeedbackModal
jest.mock('@/components/FeedbackModal', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    isOpen ? (
      <div data-testid="feedback-modal">
        <button onClick={onClose}>Close Modal</button>
      </div>
    ) : null
  ),
}));

describe('HeroSection Component', () => {
  it('should render hero section with main heading', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Training Reps Costs/i)).toBeInTheDocument();
    expect(screen.getByText(/\$5,000 & Several Months\./i)).toBeInTheDocument();
  });

  it('should render description text', () => {
    render(<HeroSection />);
    expect(screen.getByText(/DialerGPT is the AI-powered training ground/i)).toBeInTheDocument();
  });

  it('should render call-to-action buttons', () => {
    render(<HeroSection />);
    expect(screen.getByRole('button', { name: /start training free/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /see it in action/i })).toBeInTheDocument();
  });

  it('should render feature badges', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Unlimited Practice/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time Feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/Ready for Enterprise/i)).toBeInTheDocument();
  });

  it('should render trusted badge', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Trusted by Purrify/i)).toBeInTheDocument();
  });

  it('should render dashboard preview card', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Rep Performance/i)).toBeInTheDocument();
    expect(screen.getByText(/Live Training Session/i)).toBeInTheDocument();
  });

  it('should render performance metrics', () => {
    render(<HeroSection />);
    // Use getAllByText since there may be multiple elements matching these patterns
    expect(screen.getAllByText(/Objection Handling/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/92%/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Empathy Score/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/88%/i).length).toBeGreaterThan(0);
  });

  it('should render AI coach feedback', () => {
    render(<HeroSection />);
    expect(screen.getByText(/AI Coach Feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/Great job pivoting on the pricing objection/i)).toBeInTheDocument();
  });

  it('should render ramp time stat card', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Ramp Time/i)).toBeInTheDocument();
    expect(screen.getByText(/-60%/i)).toBeInTheDocument();
    expect(screen.getByText(/vs Industry Avg/i)).toBeInTheDocument();
  });

  it('should render background image with correct attributes', () => {
    render(<HeroSection />);
    const image = screen.getByAltText('Background');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/hero-bg.png');
  });

  it('should open feedback modal when "Start Training Free" is clicked', () => {
    render(<HeroSection />);
    const startButton = screen.getByRole('button', { name: /start training free/i });

    // Modal should not be visible initially
    expect(screen.queryByTestId('feedback-modal')).not.toBeInTheDocument();

    // Click button to open modal
    fireEvent.click(startButton);

    // Modal should now be visible
    expect(screen.getByTestId('feedback-modal')).toBeInTheDocument();
  });

  it('should open feedback modal when "See It In Action" is clicked', () => {
    render(<HeroSection />);
    const actionButton = screen.getByRole('button', { name: /see it in action/i });

    // Modal should not be visible initially
    expect(screen.queryByTestId('feedback-modal')).not.toBeInTheDocument();

    // Click button to open modal
    fireEvent.click(actionButton);

    // Modal should now be visible
    expect(screen.getByTestId('feedback-modal')).toBeInTheDocument();
  });

  it('should close feedback modal when close is triggered', () => {
    render(<HeroSection />);
    const startButton = screen.getByRole('button', { name: /start training free/i });

    // Open modal
    fireEvent.click(startButton);
    expect(screen.getByTestId('feedback-modal')).toBeInTheDocument();

    // Close modal
    const closeButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeButton);

    // Modal should be closed
    expect(screen.queryByTestId('feedback-modal')).not.toBeInTheDocument();
  });

  it('should render active status indicator', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
  });

  it('should apply gradient text to main heading', () => {
    render(<HeroSection />);
    const gradientText = screen.getByText(/\$5,000 & Several Months\./i);
    expect(gradientText).toHaveClass('gradient-text');
  });
});
