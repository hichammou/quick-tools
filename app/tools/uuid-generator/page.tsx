"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CopyIcon, RefreshCwIcon } from "lucide-react"
import ToolLayout from "@/components/tool-layout"

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState<string[]>([])
  const [count, setCount] = useState(1)

  const generateUUIDs = () => {
    const newUuids = Array.from({ length: count }, () => crypto.randomUUID())
    setUuids(newUuids)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const copyAllUUIDs = () => {
    navigator.clipboard.writeText(uuids.join("\n"))
  }

  return (
    <ToolLayout title="UUID Generator" description="Generate v4 UUIDs instantly">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Generate UUIDs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of UUIDs</label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(100, Number.parseInt(e.target.value) || 1)))}
                />
              </div>
              <Button onClick={generateUUIDs} className="mt-6">
                <RefreshCwIcon className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        {uuids.length > 0 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Generated UUIDs</CardTitle>
              {uuids.length > 1 && (
                <Button variant="outline" size="sm" onClick={copyAllUUIDs}>
                  <CopyIcon className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
              )}
            </CardHeader>
            <CardContent className="space-y-2">
              {uuids.map((uuid, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded border">
                  <code className="flex-1 font-mono text-sm">{uuid}</code>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(uuid)}>
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </ToolLayout>
  )
}
