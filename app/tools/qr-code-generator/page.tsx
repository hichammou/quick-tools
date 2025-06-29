"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DownloadIcon } from "lucide-react";
import ToolLayout from "@/components/tool-layout";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState("200");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQRCode = async () => {
    if (!text.trim()) return;

    // Using QR Server API for simplicity
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      text
    )}`;
    setQrCodeUrl(qrUrl);
  };

  const downloadQRCode = async () => {
    if (!qrCodeUrl) return;

    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.png";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Generate downloadable QR codes from text"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter text, URL, or any data to encode..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="150">150x150</SelectItem>
                    <SelectItem value="200">200x200</SelectItem>
                    <SelectItem value="300">300x300</SelectItem>
                    <SelectItem value="400">400x400</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={generateQRCode}
                disabled={!text.trim()}
                className="mt-6"
              >
                Generate QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {qrCodeUrl && (
          <Card>
            <CardHeader>
              <CardTitle>Generated QR Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <img
                  src={qrCodeUrl || "/placeholder.svg"}
                  alt="Generated QR Code"
                  className="mx-auto border rounded-lg shadow-md"
                  crossOrigin="anonymous"
                />
              </div>
              <Button onClick={downloadQRCode} className="w-full">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download QR Code
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </ToolLayout>
  );
}
