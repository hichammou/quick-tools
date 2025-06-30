import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ToolLayout from "@/components/tool-layout";
import QrCodeProvider from "@/components/qr-code/context";
import QrCodeInput from "@/components/qr-code/qr-code-input";
import QrCodeSizeSelect from "@/components/qr-code/qr-code-size-select";
import DownloadQrCode from "@/components/qr-code/download-qr-code";
import GenerateQrCodeButton from "@/components/qr-code/generate-qr-code";

export default function QRCodeGenerator() {
  return (
    <ToolLayout
      title="QR Code Generator"
      description="Generate downloadable QR codes from text"
    >
      <QrCodeProvider>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <QrCodeInput />

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <QrCodeSizeSelect />
                </div>
                <GenerateQrCodeButton />
              </div>
            </CardContent>
          </Card>

          <DownloadQrCode />
        </div>
      </QrCodeProvider>
    </ToolLayout>
  );
}
