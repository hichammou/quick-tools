"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { CopyIcon } from "lucide-react"
import ToolLayout from "@/components/tool-layout"

export default function TextCaseConverter() {
  const [input, setInput] = useState("")
  const [outputs, setOutputs] = useState({
    uppercase: "",
    lowercase: "",
    titleCase: "",
    sentenceCase: "",
    camelCase: "",
    pascalCase: "",
    snakeCase: "",
    kebabCase: "",
  })

  const convertText = () => {
    const text = input.trim()
    if (!text) return

    setOutputs({
      uppercase: text.toUpperCase(),
      lowercase: text.toLowerCase(),
      titleCase: text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
      sentenceCase: text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
      camelCase: text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
        .replace(/\s+/g, ""),
      pascalCase: text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, ""),
      snakeCase: text.toLowerCase().replace(/\s+/g, "_"),
      kebabCase: text.toLowerCase().replace(/\s+/g, "-"),
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const caseTypes = [
    { key: "uppercase", label: "UPPERCASE" },
    { key: "lowercase", label: "lowercase" },
    { key: "titleCase", label: "Title Case" },
    { key: "sentenceCase", label: "Sentence case" },
    { key: "camelCase", label: "camelCase" },
    { key: "pascalCase", label: "PascalCase" },
    { key: "snakeCase", label: "snake_case" },
    { key: "kebabCase", label: "kebab-case" },
  ]

  return (
    <ToolLayout title="Text Case Converter" description="Convert text to different cases">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Input Text</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
            />
            <Button onClick={convertText} className="w-full">
              Convert Text
            </Button>
          </CardContent>
        </Card>

        {Object.values(outputs).some((output) => output) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseTypes.map(({ key, label }) => (
              <Card key={key}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">{label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="relative">
                    <div className="p-3 bg-gray-50 rounded border min-h-[60px] font-mono text-sm break-all">
                      {outputs[key as keyof typeof outputs] || "—"}
                    </div>
                    {outputs[key as keyof typeof outputs] && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-1 right-1 bg-transparent"
                        onClick={() => copyToClipboard(outputs[key as keyof typeof outputs])}
                      >
                        <CopyIcon className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
