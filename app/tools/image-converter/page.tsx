import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ToolLayout from "@/components/tool-layout";
import ImageConverterProvider from "@/components/image-converter/context";
import ImageConverterInput from "@/components/image-converter/image-converter-input";
import ImageConverterOptions from "@/components/image-converter/image-converter-options";
import ImageConverterOutput from "@/components/image-converter/image-converter-output";
import ImageConverterCanvas from "@/components/image-converter/image-converter-canvas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Converter - Convert PNG, JPG, WebP Online Free",
  description:
    "Free online image converter tool. Convert images between PNG, JPG, JPEG, and WebP formats instantly. Fast, secure, and easy to use image format converter.",
  keywords: [
    "image converter",
    "convert png to jpg",
    "convert jpg to png",
    "convert webp",
    "png to webp converter",
    "jpg to webp converter",
    "image format converter",
    "online image converter",
    "free image converter",
    "convert images online",
    "png converter",
    "jpg converter",
    "webp converter",
    "image format changer",
    "picture converter",
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
    url: "https://quick-tools-pban.vercel.app/tools/image-converter",
    title: "Image Converter - Convert PNG, JPG, WebP Online Free",
    description:
      "Free online image converter tool. Convert images between PNG, JPG, JPEG, and WebP formats instantly. Fast, secure, and easy to use.",
    siteName: "quick-tools",
    images: [
      {
        url: "https://quick-tools-pban.vercel.app/images/image-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online Image Converter Tool - Convert PNG, JPG, WebP",
      },
    ],
  },

  alternates: {
    canonical: "https://quick-tools-pban.vercel.app/tools/image-converter",
  },
  other: {
    "application-name": "Image Converter Tool",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Image Converter",
    "format-detection": "telephone=no",
  },
  category: "productivity",
};

export default function ImageConverter() {
  return (
    <ToolLayout
      title="Image Converter"
      description="Convert between PNG, JPG, and WebP formats"
    >
      <ImageConverterProvider>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ImageConverterInput />
              <ImageConverterOptions />
            </CardContent>
          </Card>

          <ImageConverterOutput />
        </div>
        <ImageConverterCanvas />
      </ImageConverterProvider>
    </ToolLayout>
  );
}
