"use client";

import { createContext, useContext, useState } from "react";

type QrCodeContextType = {
  text: string;
  size: string;
  qrCodeUrl: string;
  setText: (s: string) => void;
  setSize: (s: string) => void;
  generateQRCode: () => void;
  downloadQRCode: () => void;
};

const QrCodeContext = createContext<QrCodeContextType>({
  text: "",
  size: "200",
  qrCodeUrl: "",
  setSize: () => {},
  setText: () => {},
  downloadQRCode: () => {},
  generateQRCode: () => {},
});

function QrCodeProvider({ children }: { children: React.ReactNode }) {
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
    <QrCodeContext.Provider
      value={{
        text,
        size,
        qrCodeUrl,
        setSize,
        setText,
        downloadQRCode,
        generateQRCode,
      }}
    >
      {children}
    </QrCodeContext.Provider>
  );
}

export default QrCodeProvider;

export const useQrCode = () => {
  const context = useContext(QrCodeContext);
  if (!context) {
    throw new Error("useQrCode must be used within an QrCodeProvider");
  }
  return context;
};
