import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FeedbackModal from '@/components/FeedbackModal';

// Mock fetch
global.fetch = jest.fn();

describe('FeedbackModal Component', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should not render when isOpen is false', () => {
    render(<FeedbackModal isOpen={false} onClose={jest.fn()} />);
    expect(screen.queryByText(/Help Us Build Something Amazing/i)).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByText(/Help Us Build Something Amazing/i)).toBeInTheDocument();
  });

  it('should render step 1 with feedback type options', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByText(/Feature Request/i)).toBeInTheDocument();
    expect(screen.getByText(/Improvement Idea/i)).toBeInTheDocument();
    expect(screen.getByText(/General Feedback/i)).toBeInTheDocument();
  });

  it('should render textarea for description', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    expect(textarea).toBeInTheDocument();
  });

  it('should disable continue button when form is invalid', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);
    const continueButton = screen.getByRole('button', { name: /Continue/i });
    expect(continueButton).toBeDisabled();
  });

  it('should enable continue button when feedback type and description are provided', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Select feedback type
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);

    // Enter description
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'This is my feedback' } });

    // Continue button should now be enabled
    const continueButton = screen.getByRole('button', { name: /Continue/i });
    expect(continueButton).not.toBeDisabled();
  });

  it('should proceed to step 2 when continue is clicked', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Fill step 1
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'This is my feedback' } });

    // Click continue
    const continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    // Should show step 2
    expect(screen.getByText(/Stay in the Loop/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
  });

  it('should validate email format', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Fill step 1 and proceed to step 2
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'This is my feedback' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Enter invalid email
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const submitButton = screen.getByRole('button', { name: /Submit Feedback/i });
    expect(submitButton).toBeDisabled();

    // Enter valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(submitButton).not.toBeDisabled();
  });

  it('should go back to step 1 when back button is clicked', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Go to step 2
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'This is my feedback' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Click back - use getAllByRole and select the first one (the actual Back button)
    const backButtons = screen.getAllByRole('button', { name: /Back/i });
    fireEvent.click(backButtons[0]);

    // Should be back at step 1
    expect(screen.getByText(/Help Us Build Something Amazing/i)).toBeInTheDocument();
  });

  it('should submit feedback successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Fill step 1
    const improvementRadio = screen.getByLabelText(/Improvement Idea/i);
    fireEvent.click(improvementRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'Great product!' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Fill step 2
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });

    // Submit
    const submitButton = screen.getByRole('button', { name: /Submit Feedback/i });
    fireEvent.click(submitButton);

    // Wait for success step
    await waitFor(() => {
      expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'improvement',
        description: 'Great product!',
        email: 'user@example.com',
      }),
    });
  });

  it('should handle submission error', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Server error occurred' }),
    });

    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Fill step 1
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'New feature request' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Fill step 2
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Submit
    const submitButton = screen.getByRole('button', { name: /Submit Feedback/i });
    fireEvent.click(submitButton);

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/Server error occurred/i)).toBeInTheDocument();
    });
  });

  it('should close modal and reset state when close button is clicked', () => {
    const onClose = jest.fn();
    render(<FeedbackModal isOpen={true} onClose={onClose} />);

    // Fill some data
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);

    // Click close button
    const closeButton = screen.getByRole('button', { name: '' }); // X button has no text
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });

  it('should display benefits in step 2', () => {
    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Go to step 2
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'Test feedback' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Check benefits
    expect(screen.getByText(/Get updates when we implement your idea/i)).toBeInTheDocument();
    expect(screen.getByText(/Early access to new features/i)).toBeInTheDocument();
    expect(screen.getByText(/Direct line to our product team/i)).toBeInTheDocument();
  });

  it('should show submitting state while submitting', async () => {
    (global.fetch as jest.Mock).mockImplementation(() =>
      new Promise(resolve => setTimeout(() => resolve({ ok: true, json: async () => ({}) }), 100))
    );

    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    // Fill and submit form
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'Test' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const submitButton = screen.getByRole('button', { name: /Submit Feedback/i });
    fireEvent.click(submitButton);

    // Should show submitting text
    expect(screen.getByRole('button', { name: /Submitting.../i })).toBeInTheDocument();

    // Wait for completion
    await waitFor(() => {
      expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
    });
  });

  it('should display user email in success message', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<FeedbackModal isOpen={true} onClose={jest.fn()} />);

    const testEmail = 'success@example.com';

    // Fill and submit form
    const featureRadio = screen.getByLabelText(/Feature Request/i);
    fireEvent.click(featureRadio);
    const textarea = screen.getByPlaceholderText(/Describe your idea or feedback in detail/i);
    fireEvent.change(textarea, { target: { value: 'Test feedback' } });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: testEmail } });
    fireEvent.click(screen.getByRole('button', { name: /Submit Feedback/i }));

    // Wait for success
    await waitFor(() => {
      expect(screen.getByText(new RegExp(testEmail, 'i'))).toBeInTheDocument();
    });
  });
});
