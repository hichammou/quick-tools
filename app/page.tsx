import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ImageIcon,
  CodeIcon,
  TypeIcon,
  KeyIcon,
  QrCodeIcon,
  BracesIcon,
  ArrowRightIcon,
} from "lucide-react";

const tools = [
  {
    id: "image-converter",
    title: "Image Converter",
    description: "Convert between PNG, JPG, and WebP formats",
    icon: ImageIcon,
    href: "/tools/image-converter",
  },
  {
    id: "base64-encoder",
    title: "Base64 Encoder/Decoder",
    description: "Encode/decode base64 and view hex output",
    icon: CodeIcon,
    href: "/tools/base64-encoder",
  },
  {
    id: "text-case-converter",
    title: "Text Case Converter",
    description: "Convert to uppercase, lowercase, sentence case, etc.",
    icon: TypeIcon,
    href: "/tools/text-case-converter",
  },
  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate v4 UUIDs instantly",
    icon: KeyIcon,
    href: "/tools/uuid-generator",
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    description: "Generate downloadable QR codes from text",
    icon: QrCodeIcon,
    href: "/tools/qr-code-generator",
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format and validate JSON with collapsible view",
    icon: BracesIcon,
    href: "/tools/json-formatter",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">QT</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">QuickTools</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fast, Simple
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Tools
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Collection of essential utilities for developers and creators. No
            signup required, works offline, and respects your privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Tools
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Link
              href="https://github.com/hichammou/quick-tools.git"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Button size="lg" variant="outline">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of fast, reliable utilities designed to
              make your work easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card
                  key={tool.id}
                  className="group hover:shadow-lg transition-all duration-200 border-0 shadow-md bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={tool.href}>
                      <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-200">
                        Use Tool
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t bg-white/80 backdrop-blur-sm py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer> */}
    </div>
  );
}
