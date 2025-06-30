"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useQrCode } from "./context";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";

function DownloadQrCode() {
  const { qrCodeUrl, size, downloadQRCode } = useQrCode();
  return (
    qrCodeUrl && (
      <Card>
        <CardHeader>
          <CardTitle>Generated QR Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <Image
              width={isFinite(Number(size)) ? Number(size) : 200}
              height={isFinite(Number(size)) ? Number(size) : 200}
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
    )
  );
}

export default DownloadQrCode;
