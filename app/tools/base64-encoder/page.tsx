import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ToolLayout from "@/components/tool-layout";
import Base64Provider from "@/components/base64/context";
import Base64Input from "@/components/base64/base64-input";
import HexOutput from "@/components/base64/hex-output";
import Base64Output from "@/components/base64/base64-output";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder - Free Online Tool",
  description:
    "Free online Base64 encoder and decoder tool. Convert text to Base64, decode Base64 to text, and view hexadecimal output. Fast, secure, and easy to use.",
  keywords: [
    "base64 encoder",
    "base64 decoder",
    "base64 converter",
    "encode base64",
    "decode base64",
    "base64 tool",
    "hex converter",
    "text to base64",
    "base64 to text",
    "online encoder",
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
    url: "https://yoursite.com/tools/base64-encoder",
    title: "Base64 Encoder/Decoder - Free Online Tool",
    description:
      "Free online Base64 encoder and decoder tool. Convert text to Base64, decode Base64 to text, and view hexadecimal output.",
    siteName: "quick-tools",
    images: [
      {
        url: "https://yoursite.com/images/base64-tool-og.jpg",
        width: 1200,
        height: 630,
        alt: "Base64 Encoder/Decoder Tool",
      },
    ],
  },
  alternates: {
    canonical: "https://yoursite.com/tools/base64-encoder",
  },
  other: {
    "application-name": "Base64 Encoder Tool",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Base64 Encoder",
  },
};

export default function Base64Encoder() {
  return (
    <ToolLayout
      title="Base64 Encoder/Decoder"
      description="Encode/decode base64 and view hex output"
    >
      <Base64Provider>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Base64Input />
            </CardContent>
          </Card>

          <Base64Output />

          <HexOutput />
        </div>
      </Base64Provider>
    </ToolLayout>
  );
}
