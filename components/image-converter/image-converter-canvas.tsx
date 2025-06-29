"use client";

import { useImageConverter } from "./context";

function ImageConverterCanvas() {
  const { canvasRef } = useImageConverter();
  return <canvas ref={canvasRef} className="hidden" />;
}

export default ImageConverterCanvas;
