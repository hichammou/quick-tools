"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { CopyIcon, CheckIcon, XIcon } from "lucide-react"
import ToolLayout from "@/components/tool-layout"

export default function JSONFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState("")

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      setIsValid(true)
      setError("")
    } catch (err) {
      setIsValid(false)
      setError(err instanceof Error ? err.message : "Invalid JSON")
      setOutput("")
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      setIsValid(true)
      setError("")
    } catch (err) {
      setIsValid(false)
      setError(err instanceof Error ? err.message : "Invalid JSON")
      setOutput("")
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const clearAll = () => {
    setInput("")
    setOutput("")
    setIsValid(null)
    setError("")
  }

  return (
    <ToolLayout title="JSON Formatter" description="Format, validate, and minify JSON data">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Input JSON</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your JSON here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={8}
              className="font-mono text-sm"
            />

            <div className="flex gap-2">
              <Button onClick={formatJSON} disabled={!input.trim()}>
                Format & Validate
              </Button>
              <Button onClick={minifyJSON} disabled={!input.trim()} variant="outline">
                Minify
              </Button>
              <Button onClick={clearAll} variant="outline">
                Clear
              </Button>
            </div>

            {isValid !== null && (
              <div
                className={`flex items-center gap-2 p-3 rounded ${
                  isValid ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                {isValid ? <CheckIcon className="h-4 w-4" /> : <XIcon className="h-4 w-4" />}
                <span className="text-sm font-medium">{isValid ? "Valid JSON" : "Invalid JSON"}</span>
                {error && <span className="text-sm">: {error}</span>}
              </div>
            )}
          </CardContent>
        </Card>

        {output && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Formatted JSON</CardTitle>
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(output)}>
                <CopyIcon className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-gray-50 p-4 rounded border overflow-auto max-h-96 text-sm">
                  <code>{output}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ToolLayout>
  )
}
