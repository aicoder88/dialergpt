# Revamp DialerGPT Website

## Goal
Transform the DialerGPT website into a premium, modern, and compelling sales platform for SMBs and Mid-market companies. The redesign will incorporate specific value propositions, technical credibility indicators, and a "wow" aesthetic using glassmorphism, gradients, and animations.

## User Review Required
> [!IMPORTANT]
> I will be removing the existing "Quiz" modal if it conflicts with the new flow, or repurposing it as a "Get Started" lead gen form.
> The "Purrify" connection will be used as a primary case study/testimonial.

## Proposed Changes

### Styling & Design System
#### [MODIFY] [globals.css](file:///Users/macpro/dev/dial/dialergpt/src/app/globals.css)
- Add new premium color palette (deep purples, vibrant blues, rich gradients).
- Add utility classes for glassmorphism (`.glass-panel`), text gradients, and micro-animations.
- Define keyframes for smooth fade-ins and floating elements.

### Components

#### [MODIFY] [HeroSection.tsx](file:///Users/macpro/dev/dial/dialergpt/src/components/HeroSection.tsx)
- **Content**: Focus on "Training costs $2k-5k/rep. DialerGPT fixes this."
- **Design**: Split-screen or centered high-impact layout with 3D-style elements or abstract visualizations of "AI Coaching".
- **Social Proof**: Add "Trusted by Purrify" badge/testimonial.

#### [NEW] [FeaturesSection.tsx](file:///Users/macpro/dev/dial/dialergpt/src/components/FeaturesSection.tsx)
- **Content**: Map AWS services to user benefits:
    - **Real-time Analysis** (Transcribe/Bedrock)
    - **AI Personas** (Polly)
    - **Instant Feedback** (Bedrock)
    - **Secure & Scalable** (AWS Infra)
- **Design**: Grid layout with hover effects, glass cards, and icons.

#### [NEW] [ROISection.tsx](file:///Users/macpro/dev/dial/dialergpt/src/components/ROISection.tsx)
- **Content**: "The Economics". Compare Old Way ($3k onboarding, high churn) vs New Way (Unlimited practice, faster ramp-up).
- **Design**: Comparison table or visual graph showing cost savings.

#### [MODIFY] [PricingSection.tsx](file:///Users/macpro/dev/dial/dialergpt/src/components/PricingSection.tsx)
- **Content**: Update tiers to reflect "$99-299/month" model.
- **Design**: Highlight "Enterprise" tier for the "Technical Credibility" aspect.

#### [MODIFY] [page.tsx](file:///Users/macpro/dev/dial/dialergpt/src/app/page.tsx)
- Reassemble the page with the new sections.
- Add "Technical Credibility" banner or section (Serverless, Low-latency, HIPAA ready).

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure no type errors.
- Check for responsive layout issues.

### Manual Verification
- Verify the "Premium" look and feel (gradients, glassmorphism).
- Check that all new content (AWS features, ROI data) is present and accurate.
- Ensure mobile responsiveness.
