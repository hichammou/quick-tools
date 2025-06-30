"use client";

import { Button } from "../ui/button";
import { useQrCode } from "./context";

function GenerateQrCodeButton() {
  const { text, generateQRCode } = useQrCode();
  return (
    <Button onClick={generateQRCode} disabled={!text.trim()} className="mt-6">
      Generate QR Code
    </Button>
  );
}

export default GenerateQrCodeButton;
