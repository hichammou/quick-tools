import { UploadIcon } from "lucide-react";
import { useImageConverter } from "./context";

function ImageConverterInput() {
  const { selectedFile, fileInputRef, handleFileSelect } = useImageConverter();

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
      onClick={() => fileInputRef.current?.click()}
    >
      <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <p className="text-gray-600">
        {selectedFile ? selectedFile.name : "Click to upload an image"}
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}

export default ImageConverterInput;
