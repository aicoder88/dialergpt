import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface PricingFeature {
  name: string;
  free: boolean;
  professional: boolean;
  enterprise: boolean;
}

const PricingSection = () => {
  const pricingFeatures: PricingFeature[] = [
    { name: "Lead uploads", free: true, professional: true, enterprise: true },
    {
      name: "AI qualification calls",
      free: true,
      professional: true,
      enterprise: true,
    },
    {
      name: "Hot/Warm/Cold tagging",
      free: true,
      professional: true,
      enterprise: true,
    },
    {
      name: "CRM integration",
      free: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "Custom qualification questions",
      free: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "Advanced analytics",
      free: false,
      professional: false,
      enterprise: true,
    },
    {
      name: "Dedicated account manager",
      free: false,
      professional: false,
      enterprise: true,
    },
    { name: "API access", free: false, professional: false, enterprise: true },
    {
      name: "White-label solution",
      free: false,
      professional: false,
      enterprise: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business. Only pay for what
            you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Free Tier */}
          <Card className="border-2 border-border flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>
                Perfect for trying out DialerGPT
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Up to 50 leads per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic AI qualification</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Lead tagging</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>CSV export</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Get Started Free
              </Button>
            </CardFooter>
          </Card>

          {/* Professional Tier */}
          <Card className="border-2 border-primary flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>For growing sales teams</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Up to 500 leads per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced AI qualification</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom qualification questions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Email notifications</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Professional</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="border-2 border-border flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large sales organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited leads</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Premium AI qualification</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>White-label solution</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center">Free</TableHead>
                <TableHead className="text-center">Professional</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingFeatures.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.free ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.professional ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.enterprise ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Upsell Section */}
        <div className="mt-20 bg-muted p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Need More Leads?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Supercharge your sales pipeline with our premium lead generation
              and AI SDR services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Lead Generation Service</CardTitle>
                <CardDescription>
                  Get high-quality leads tailored to your target market.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team will identify and deliver qualified leads specific to
                  your industry and target audience. Pricing starts at $20 per
                  qualified lead.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI SDR Service</CardTitle>
                <CardDescription>
                  Let our AI handle follow-up calls and appointment setting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced AI sales development representatives make
                  follow-up calls to nurture leads and set appointments.
                  Starting at just $0.10 per minute.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
