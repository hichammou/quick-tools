import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useImageConverter } from "./context";

function ImageConverterOptions() {
  const {
    selectedFile,
    outputFormat,
    isConverting,
    convertImage,
    setOutputFormat,
  } = useImageConverter();
  return (
    selectedFile && (
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Output Format
          </label>
          <Select value={outputFormat} onValueChange={setOutputFormat}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="webp">WebP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={convertImage} disabled={isConverting} className="mt-6">
          {isConverting ? "Converting..." : "Convert"}
        </Button>
      </div>
    )
  );
}

export default ImageConverterOptions;
