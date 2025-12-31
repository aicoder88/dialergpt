import { render, screen } from '@testing-library/react'
import PricingSection from '@/components/PricingSection'

describe('PricingSection', () => {
  it('renders the section heading', () => {
    render(<PricingSection />)
    expect(screen.getByText(/Simple, Transparent/i)).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders all three pricing tiers', () => {
    render(<PricingSection />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('renders pricing amounts', () => {
    render(<PricingSection />)
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toBeInTheDocument()
  })

  it('shows most popular badge on Growth tier', () => {
    render(<PricingSection />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders CTA buttons for each tier', () => {
    render(<PricingSection />)
    expect(screen.getByRole('button', { name: /Start Free Trial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Contact Sales/i })).toBeInTheDocument()
  })

  it('renders starter tier features', () => {
    render(<PricingSection />)
    expect(screen.getByText('Unlimited Practice Calls')).toBeInTheDocument()
    expect(screen.getByText('5 User Accounts')).toBeInTheDocument()
    expect(screen.getByText('Basic Analytics')).toBeInTheDocument()
    expect(screen.getByText('Standard Support')).toBeInTheDocument()
  })

  it('renders growth tier features', () => {
    render(<PricingSection />)
    expect(screen.getByText('Everything in Starter')).toBeInTheDocument()
    expect(screen.getByText('Up to 20 User Accounts')).toBeInTheDocument()
    expect(screen.getByText('Advanced Coaching Insights')).toBeInTheDocument()
    expect(screen.getByText('CRM Integration')).toBeInTheDocument()
  })

  it('renders enterprise tier features', () => {
    render(<PricingSection />)
    expect(screen.getByText('HIPAA & SOC2 Compliance')).toBeInTheDocument()
    expect(screen.getByText('Dedicated AWS Instance')).toBeInTheDocument()
    expect(screen.getByText('SSO & Advanced Security')).toBeInTheDocument()
    expect(screen.getByText('Custom AI Model Fine-tuning')).toBeInTheDocument()
  })
})
