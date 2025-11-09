"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { X, Sparkles, TrendingUp, Users, CheckCircle } from "lucide-react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [voteCount, setVoteCount] = useState(150);
  const [recentVotes, setRecentVotes] = useState<string[]>([
    "Mike from Austin just voted for Smart Parallel Dialer",
    "Sarah from Boston just voted for AI Call-to-CRM Sync",
    "David from Seattle just voted for TCPA Compliance Monitor",
  ]);

  const [answers, setAnswers] = useState({
    tool: "",
    toolOther: "",
    motivation: "",
    motivationOther: "",
    urgency: "",
  });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submissionComplete, setSubmissionComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Animate vote counter
      const interval = setInterval(() => {
        setVoteCount((prev) => prev + 1);
      }, 5000);

      // Rotate recent votes
      const voteInterval = setInterval(() => {
        const votes = [
          "Mike from Austin just voted for Smart Parallel Dialer",
          "Sarah from Boston just voted for AI Call-to-CRM Sync",
          "David from Seattle just voted for TCPA Compliance Monitor",
          "Jessica from Miami just voted for AI Quote Builder",
          "Tom from Denver just voted for Instant Lead Router",
          "Lisa from Portland just voted for Competitor Intel Dashboard",
        ];
        setRecentVotes([votes[Math.floor(Math.random() * votes.length)]]);
      }, 4000);

      return () => {
        clearInterval(interval);
        clearInterval(voteInterval);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setAnswers({
        tool: "",
        toolOther: "",
        motivation: "",
        motivationOther: "",
        urgency: "",
      });
      setEmail("");
      setIsSubmitting(false);
      setSubmissionError(null);
      setSubmissionComplete(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const TOTAL_QUESTIONS = 3;
  const emailStep = TOTAL_QUESTIONS + 1;
  const successStep = TOTAL_QUESTIONS + 2;
  const progressStep = Math.min(step, TOTAL_QUESTIONS);
  const progressPercent = Math.round((progressStep / TOTAL_QUESTIONS) * 100);
  const progressLabel =
    step <= TOTAL_QUESTIONS
      ? `Question ${step} of ${TOTAL_QUESTIONS}`
      : step === emailStep
      ? "Stay in the loop"
      : "All set!";
  const emailPreview = email.trim();

  const handleNext = () => {
    setSubmissionError(null);
    if (step < TOTAL_QUESTIONS) {
      setStep(step + 1);
    } else {
      setStep(emailStep); // Email capture step
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const payload = {
      answers: {
        ...answers,
        toolOther:
          answers.tool === "other"
            ? answers.toolOther?.trim() ?? ""
            : undefined,
        motivationOther:
          answers.motivation === "other"
            ? answers.motivationOther?.trim() ?? ""
            : undefined,
      },
      email: email.trim(),
    };

    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message =
          (errorBody && typeof errorBody.error === "string"
            ? errorBody.error
            : null) ?? "We couldn't save your vote. Please try again.";
        throw new Error(message);
      }

      setSubmissionComplete(true);
      setStep(successStep);
    } catch (error) {
      console.error("Failed to submit quiz", error);
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "We couldn't save your vote. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          answers.tool !== "" &&
          (answers.tool !== "other" ||
            (answers.toolOther?.trim()?.length ?? 0) > 0)
        );
      case 2:
        return (
          answers.motivation !== "" &&
          (answers.motivation !== "other" ||
            (answers.motivationOther?.trim()?.length ?? 0) > 0)
        );
      case 3:
        return answers.urgency !== "";
      case emailStep:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
      case successStep:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-0 brand-shadow">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <CardContent className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full border-2 border-orange-400 bg-orange-100 dark:border-orange-600 dark:bg-orange-950/70 px-5 py-2.5 text-sm font-bold text-orange-700 dark:text-orange-300 mb-4 animate-pulse">
              <Sparkles className="mr-2 h-5 w-5" />
              🚨 THIS SITE ISN'T REAL YET - WE NEED YOUR INPUT!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">
                We're Building the Sales Tool YOU Actually Want. Help Us Build It.
              </span>
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg p-4 mb-4">
              <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                ⚠️ HOLD UP: This landing page is a MOCKUP
              </p>
              <p className="text-base text-yellow-800 dark:text-yellow-300">
                We haven't built anything yet. <strong>YOU decide what we build.</strong> This is your chance to shape the product from day one. Vote below and we'll build whatever gets the most votes.
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Tired of sales tools that suck? <strong className="text-purple-600 dark:text-purple-400">We're letting YOU decide what we build next.</strong> Vote for the tool you'd actually pay for—and get early access when we launch.
            </p>
            <div className="mt-6 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-left">
              <p className="text-base font-semibold text-purple-900 dark:text-purple-200">
                Answer 3 quick questions → we build the winner → you get founding-member pricing + first access.
              </p>
              <p className="text-sm text-purple-800 dark:text-purple-300 mt-1">
                Help us decide what to ship and we'll keep you in the loop as prototypes turn into real product.
              </p>
            </div>
          </div>

          {/* Social Proof Bar */}
          <div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200/50 dark:border-purple-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-purple-700 dark:text-purple-300">
                  {voteCount} sales reps have voted so far
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span className="animate-pulse">{recentVotes[0]}</span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{progressLabel}</span>
              <span className="text-sm text-muted-foreground">
                {progressPercent}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Question 1: Build Priority */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2">
                What should we build first?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Pick the product you'd put in front of your team tomorrow. The top vote gets built first and voters get the earliest invite.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "AI Reactivation Caller",
                    desc: "Dials your old/ignored leads, re-engages them, and books fresh conversations automatically",
                  },
                  {
                    title: "AI Lead Qualifier + Booker",
                    desc: "Instantly calls every new lead, qualifies them, and locks meetings on your calendar",
                  },
                  {
                    title: "AI Website Concierge",
                    desc: "Turns your site into a talking rep that answers questions and books calls 24/7",
                  },
                ].map((option) => (
                  <label
                    key={option.title}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.tool === option.title
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-950/30"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="tool"
                      value={option.title}
                      checked={answers.tool === option.title}
                      onChange={(e) =>
                        setAnswers({ ...answers, tool: e.target.value })
                      }
                      className="mt-1 mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{option.title}</div>
                      <div className="text-sm text-muted-foreground">{option.desc}</div>
                    </div>
                  </label>
                ))}
                <div className="flex items-start p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <input
                    type="radio"
                    name="tool"
                    value="other"
                    checked={answers.tool === "other"}
                    onChange={(e) =>
                      setAnswers({ ...answers, tool: e.target.value })
                    }
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <span className="block mb-2">Something else:</span>
                    <Input
                      placeholder="Describe what you'd want..."
                      value={answers.toolOther}
                      onChange={(e) =>
                        setAnswers({ ...answers, toolOther: e.target.value })
                      }
                      disabled={answers.tool !== "other"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Question 2: Motivation */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2">
                Why does your team need this built?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Help us understand the motivation so we can DM you when we're tackling your exact use case.
              </p>
              <div className="space-y-3">
                {[
                  "We lose hours every week doing grunt CRM work",
                  "Leads sit for too long before a rep calls back",
                  "Competitors keep beating us on deals",
                  "Custom quotes/proposals slow every deal",
                  "We need more live conversations every day",
                  "I worry about compliance/legal blowback",
                ].map((option) => (
                  <label
                    key={option}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.motivation === option
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-950/30"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="motivation"
                      value={option}
                      checked={answers.motivation === option}
                      onChange={(e) =>
                        setAnswers({ ...answers, motivation: e.target.value })
                      }
                      className="mt-1 mr-3"
                    />
                    <span className="flex-1 font-medium">{option}</span>
                  </label>
                ))}
                <div className="flex items-start p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <input
                    type="radio"
                    name="motivation"
                    value="other"
                    checked={answers.motivation === "other"}
                    onChange={(e) =>
                      setAnswers({ ...answers, motivation: e.target.value })
                    }
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <span className="block mb-2">Something else:</span>
                    <Input
                      placeholder="Tell us what this unlocks for you..."
                      value={answers.motivationOther}
                      onChange={(e) =>
                        setAnswers({
                          ...answers,
                          motivationOther: e.target.value,
                        })
                      }
                      disabled={answers.motivation !== "other"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Question 3: Urgency */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2">
                How fast do you need this live?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Your timeline helps us prioritize beta invites and onboarding slots.
              </p>
              <div className="space-y-3">
                {[
                  "ASAP - I'm losing deals without it",
                  "Within 3 months",
                  "Within 6 months",
                  "Just researching for now",
                ].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers.urgency === option
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-950/30"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value={option}
                      checked={answers.urgency === option}
                      onChange={(e) =>
                        setAnswers({ ...answers, urgency: e.target.value })
                      }
                      className="mr-3"
                    />
                    <span className="flex-1 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Email Capture */}
          {step === emailStep && (
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold">Thanks! One Last Thing...</h3>
              <p className="text-lg text-muted-foreground">
                Want to be first in line when we launch? Drop your email and we'll give you:
              </p>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Early access (before anyone else)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>50% off founding member pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <span>Direct say in features we build</span>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (submissionError) {
                      setSubmissionError(null);
                    }
                  }}
                  className="text-lg p-6"
                />
              </div>
            </div>
          )}

          {step === successStep && submissionComplete && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold">You're on the list!</h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Thanks for voting. We'll keep you posted on the winner and send early access details to {emailPreview || "your inbox"}.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground max-w-xl mx-auto">
                <p>Your feedback directly shapes our roadmap.</p>
                <p>We send only launch updates and priority invites.</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex gap-4">
            {step > 1 && step <= TOTAL_QUESTIONS && (
              <Button
                variant="outline"
                onClick={() => {
                  setSubmissionError(null);
                  setStep(step - 1);
                }}
                className="flex-1"
              >
                Back
              </Button>
            )}
            {step <= TOTAL_QUESTIONS && (
              <Button
                onClick={handleNext}
                disabled={!isStepValid() || isSubmitting}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                {step === TOTAL_QUESTIONS ? "Continue" : "Next Question"}
              </Button>
            )}
            {step === emailStep && (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                {isSubmitting ? "Submitting..." : "Get Early Access"}
              </Button>
            )}
            {step === successStep && submissionComplete && (
              <Button
                onClick={onClose}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Close
              </Button>
            )}
          </div>

          {submissionError && (
            <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
              {submissionError}
            </p>
          )}

          {/* Footer Message */}
          <div className="mt-8 text-center space-y-3">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <p className="font-bold text-purple-900 dark:text-purple-200 text-base mb-2">
                💡 We're not another faceless SaaS company.
              </p>
              <p className="text-sm text-purple-800 dark:text-purple-300">
                We're building this WITH sales reps, not for them. Your vote = our roadmap. Top-voted tool gets built first.
              </p>
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-base">
              🏆 We're building the #1 community-voted sales tool of 2025
            </p>
            <p className="text-xs text-muted-foreground">
              We'll email results next week so you can see what the community wants.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizModal;
