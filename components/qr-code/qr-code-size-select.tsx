"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQrCode } from "./context";

function QrCodeSizeSelect() {
  const { size, setSize } = useQrCode();

  return (
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
  );
}
export default QrCodeSizeSelect;
