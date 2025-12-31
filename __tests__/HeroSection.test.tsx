import { render, screen, fireEvent } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} />
  },
}))

// Mock FeedbackModal
jest.mock('@/components/FeedbackModal', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? <div data-testid="feedback-modal">Modal Open</div> : null,
}))

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText('Training Reps Costs')).toBeInTheDocument()
    expect(screen.getByText('$5,000 & Several Months.')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<HeroSection />)
    expect(
      screen.getByText(/DialerGPT is the AI-powered training ground/i)
    ).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<HeroSection />)
    expect(screen.getByRole('button', { name: /Start Training Free/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /See It In Action/i })).toBeInTheDocument()
  })

  it('renders feature checkmarks', () => {
    render(<HeroSection />)
    expect(screen.getByText('Unlimited Practice')).toBeInTheDocument()
    expect(screen.getByText('Real-time Feedback')).toBeInTheDocument()
    expect(screen.getByText('Ready for Enterprise')).toBeInTheDocument()
  })

  it('opens feedback modal when CTA is clicked', () => {
    render(<HeroSection />)
    const ctaButton = screen.getByRole('button', { name: /Start Training Free/i })

    expect(screen.queryByTestId('feedback-modal')).not.toBeInTheDocument()

    fireEvent.click(ctaButton)

    expect(screen.getByTestId('feedback-modal')).toBeInTheDocument()
  })

  it('renders the stats card', () => {
    render(<HeroSection />)
    expect(screen.getByText('Ramp Time')).toBeInTheDocument()
    expect(screen.getByText('-60%')).toBeInTheDocument()
  })

  it('renders rep performance dashboard', () => {
    render(<HeroSection />)
    expect(screen.getByText('Rep Performance')).toBeInTheDocument()
    expect(screen.getByText('Objection Handling')).toBeInTheDocument()
    expect(screen.getByText('Empathy Score')).toBeInTheDocument()
  })
})
