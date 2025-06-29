import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadIcon } from "lucide-react";
import { useImageConverter } from "./context";

function ImageConverterOutput() {
  const { convertedImage, downloadImage } = useImageConverter();
  return (
    convertedImage && (
      <Card>
        <CardHeader>
          <CardTitle>Converted Image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={convertedImage || "/placeholder.svg"}
              alt="Converted"
              className="max-w-full h-auto rounded-lg shadow-md mx-auto"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <Button onClick={downloadImage} className="w-full">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download Converted Image
          </Button>
        </CardContent>
      </Card>
    )
  );
}

export default ImageConverterOutput;
