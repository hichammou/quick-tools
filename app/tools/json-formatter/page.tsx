import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ToolLayout from "@/components/tool-layout";

import FormattedJsonOutput from "@/components/json-formatter/formatted-json-output";
import JsonFormatterProvider from "@/components/json-formatter/context";
import JsonActions from "@/components/json-formatter/json-actions";
import JsonInput from "@/components/json-formatter/json-input";
import JsonValidationMessage from "@/components/json-formatter/json-validation-message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator - Format, Validate & Minify JSON Online",
  description:
    "Free online JSON formatter, validator, and minifier tool. Format messy JSON, validate JSON syntax, minify JSON data, and beautify JSON strings instantly. Easy to use JSON parser.",
  keywords: [
    "json formatter",
    "json validator",
    "json minifier",
    "json beautifier",
    "format json",
    "validate json",
    "minify json",
    "json parser",
    "json viewer",
    "json editor",
    "online json formatter",
    "json syntax checker",
    "json pretty print",
    "json lint",
    "json tool",
    "json converter",
    "json organizer",
    "json structure",
  ],
  authors: [{ name: "quick-tools" }],
  creator: "quick-tools",
  publisher: "quick-tools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quick-tools-pban.vercel.app/tools/json-formatter",
    title: "JSON Formatter & Validator - Format, Validate & Minify JSON Online",
    description:
      "Free online JSON formatter, validator, and minifier tool. Format messy JSON, validate JSON syntax, and beautify JSON strings instantly.",
    siteName: "quick-tools",
    images: [
      {
        url: "https://quick-tools-pban.vercel.app/images/json-formatter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online JSON Formatter and Validator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator - Format, Validate & Minify JSON Online",
    description:
      "Free online JSON formatter, validator, and minifier. Format messy JSON, validate syntax, and beautify JSON strings instantly.",
    creator: "@yourtwitterhandle",
    images: [
      "https://quick-tools-pban.vercel.app/images/json-formatter-twitter.jpg",
    ],
  },
  alternates: {
    canonical: "https://quick-tools-pban.vercel.app/tools/json-formatter",
  },
  other: {
    "application-name": "JSON Formatter Tool",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "JSON Formatter",
    "format-detection": "telephone=no",
  },
  category: "productivity",
};

export default function JSONFormatter() {
  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format, validate, and minify JSON data"
    >
      <JsonFormatterProvider>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Input JSON</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <JsonInput />

              <JsonActions />

              <JsonValidationMessage />
            </CardContent>
          </Card>
          <FormattedJsonOutput />
        </div>
      </JsonFormatterProvider>
    </ToolLayout>
  );
}
