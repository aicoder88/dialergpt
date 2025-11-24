import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DialerGPT - Pitch Deck",
  description: "AI-powered sales training platform - Transforming how sales teams are built",
};

export default function PitchDeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
