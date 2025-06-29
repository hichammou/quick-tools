"use client";

import { createContext, useContext, useRef, useState } from "react";

interface ImageConverterContextType {
  selectedFile: File | null;
  convertedImage: string | null;
  outputFormat: string;
  isConverting: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  setOutputFormat: (format: string) => void;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  convertImage: () => Promise<void>;
  downloadImage: () => void;
}

const ImageConverterContext = createContext<ImageConverterContextType>({
  selectedFile: null,
  convertedImage: null,
  outputFormat: "png",
  isConverting: false,
  fileInputRef: { current: null },
  canvasRef: { current: null },
  setOutputFormat: () => {},
  handleFileSelect: () => {},
  convertImage: async () => {},
  downloadImage: () => {},
});

function ImageConverterProvider({ children }: { children: React.ReactNode }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>("png");
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const convertImage = async () => {
    if (!selectedFile || !canvasRef.current) return;

    setIsConverting(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const mimeType = `image/${outputFormat}`;
      const quality = outputFormat === "jpeg" ? 0.9 : undefined;
      const dataUrl = canvas.toDataURL(mimeType, quality);
      setConvertedImage(dataUrl);

      setIsConverting(false);
    };

    img.src = URL.createObjectURL(selectedFile);
  };

  const downloadImage = () => {
    if (!convertedImage) return;

    const link = document.createElement("a");
    link.download = `converted-image.${outputFormat}`;
    link.href = convertedImage;
    link.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setConvertedImage(null);
    }
  };

  return (
    <ImageConverterContext.Provider
      value={{
        selectedFile,
        convertedImage,
        outputFormat,
        isConverting,
        fileInputRef,
        canvasRef,
        setOutputFormat,
        handleFileSelect,
        convertImage,
        downloadImage,
      }}
    >
      {children}
    </ImageConverterContext.Provider>
  );
}

export const useImageConverter = () => {
  const context = useContext(ImageConverterContext);
  if (!context) {
    throw new Error(
      "useImageConverter must be used within an ImageConverterProvider"
    );
  }
  return context;
};

export default ImageConverterProvider;
