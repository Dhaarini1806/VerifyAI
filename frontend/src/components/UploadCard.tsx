import { useState } from "react";
import { Upload, FileText, Image, Video, Mic, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface UploadCardProps {
  onAnalysisComplete: (result: any) => void;
}

const UploadCard = ({ onAnalysisComplete }: UploadCardProps) => {
  const [activeTab, setActiveTab] = useState<"text" | "image" | "audio" | "video">("text");
  const [textInput, setTextInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!textInput && !selectedFile) {
      toast({
        title: "Nothing to analyze",
        description: "Please enter text or select a file to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResult = {
      id: Date.now().toString(),
      type: activeTab,
      inputPreview: textInput || selectedFile?.name || "",
      result: Math.random() > 0.5 ? "real" : "fake",
      confidence: Math.floor(Math.random() * 40) + 60, // 60-100%
      explanation: "Analysis completed using advanced AI detection algorithms. Multiple factors were considered including pattern recognition, metadata analysis, and content verification.",
      timestamp: new Date(),
    };
    
    onAnalysisComplete(mockResult);
    setIsAnalyzing(false);
    setTextInput("");
    setSelectedFile(null);
    
    toast({
      title: "Analysis complete",
      description: `Content detected as ${mockResult.result} with ${mockResult.confidence}% confidence.`,
    });
  };

  const tabs = [
    { id: "text", label: "Text", icon: FileText },
    { id: "image", label: "Image", icon: Image },
    { id: "audio", label: "Audio", icon: Mic },
    { id: "video", label: "Video", icon: Video },
  ] as const;

  return (
    <Card className="card-ai">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5 text-primary" />
          <span>Content Analysis</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Upload content to check for misinformation, deepfakes, or manipulated media
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Tab Navigation */}
        <div className="grid grid-cols-4 gap-2 p-1 bg-secondary/20 rounded-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Input */}
        <div className="space-y-4">
          {activeTab === "text" ? (
            <div>
              <Textarea
                placeholder="Paste text content here to check for misinformation..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="min-h-[120px] bg-secondary/20 border-border/50"
              />
            </div>
          ) : (
            <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center">
              <input
                type="file"
                accept={
                  activeTab === "image" ? "image/*" :
                  activeTab === "audio" ? "audio/*" :
                  activeTab === "video" ? "video/*" : "*/*"
                }
                onChange={handleFileSelect}
                className="hidden"
                id={`file-${activeTab}`}
              />
              <label htmlFor={`file-${activeTab}`} className="cursor-pointer">
                <div className="space-y-2">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload {activeTab} file
                  </p>
                  {selectedFile && (
                    <p className="text-sm text-primary font-medium">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Analyze Button */}
        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing || (!textInput && !selectedFile)}
          className="w-full btn-hero"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Analyzing with AI...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Analyze Content
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UploadCard;