"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { X, Sparkles, CheckCircle, Lightbulb } from "lucide-react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [feedback, setFeedback] = useState({
    type: "",
    description: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!isStepValid() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const payload = {
      type: feedback.type,
      description: feedback.description.trim(),
      email: feedback.email.trim(),
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message =
          (errorBody && typeof errorBody.error === "string"
            ? errorBody.error
            : null) ?? "We couldn't save your feedback. Please try again.";
        throw new Error(message);
      }

      setStep(3); // Success step
    } catch (error) {
      console.error("Failed to submit feedback", error);
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "We couldn't save your feedback. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return feedback.type !== "" && feedback.description.trim().length > 0;
      case 2:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(feedback.email.trim());
      default:
        return false;
    }
  };

  const handleClose = () => {
    setStep(1);
    setFeedback({ type: "", description: "", email: "" });
    setSubmissionError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border-0 brand-shadow">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <CardContent className="p-8 md:p-12">
          {/* Step 1: Feedback Type & Description */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm font-bold text-purple-400 mb-4">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  We'd Love Your Input!
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="gradient-text">
                    Help Us Build Something Amazing
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Share your ideas for features, improvements, or anything you'd like to see in DialerGPT.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-3">
                    What would you like to share?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "feature", label: "Feature Request", desc: "Suggest a new capability" },
                      { value: "improvement", label: "Improvement Idea", desc: "How we can make it better" },
                      { value: "feedback", label: "General Feedback", desc: "Your thoughts on the product" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${
                          feedback.type === option.value
                            ? "border-purple-500 bg-purple-500/10 ring-1 ring-purple-500"
                            : "border-white/10 hover:border-purple-500/50 hover:bg-white/5"
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={option.value}
                          checked={feedback.type === option.value}
                          onChange={(e) =>
                            setFeedback({ ...feedback, type: e.target.value })
                          }
                          className="mt-1 mr-3 accent-purple-600"
                        />
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us more
                  </label>
                  <Textarea
                    placeholder="Describe your idea or feedback in detail..."
                    value={feedback.description}
                    onChange={(e) =>
                      setFeedback({ ...feedback, description: e.target.value })
                    }
                    className="min-h-[120px] bg-white/5 border-white/10"
                  />
                </div>
              </div>

              <Button
                onClick={() => setStep(2)}
                disabled={!isStepValid()}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Email Capture */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
                <p className="text-lg text-muted-foreground">
                  Drop your email so we can follow up on your feedback and keep you updated on new features.
                </p>
              </div>

              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Get updates when we implement your idea</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Early access to new features</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Direct line to our product team</span>
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={feedback.email}
                  onChange={(e) => {
                    setFeedback({ ...feedback, email: e.target.value });
                    if (submissionError) {
                      setSubmissionError(null);
                    }
                  }}
                  className="text-lg p-6 bg-white/5 border-white/10"
                />
              </div>

              {submissionError && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  {submissionError}
                </p>
              )}

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmissionError(null);
                    setStep(1);
                  }}
                  className="flex-1 border-white/10 hover:bg-white/5"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="space-y-6 text-center py-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We've received your feedback and will review it carefully. We'll keep you posted at {feedback.email}.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground max-w-xl mx-auto">
                <p>Your input directly shapes our product roadmap.</p>
                <p>We'll reach out if we need more details or when we implement your suggestion.</p>
              </div>
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20"
              >
                Close
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackModal;
