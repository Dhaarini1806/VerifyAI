import { useState } from "react";
import { Brain, TrendingUp, Shield, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UploadCard from "@/components/UploadCard";
import ResultCard from "@/components/ResultCard";

interface AnalysisResult {
  id: string;
  type: "text" | "image" | "audio" | "video";
  inputPreview: string;
  result: "real" | "fake" | "uncertain";
  confidence: number;
  explanation: string;
  timestamp: Date;
  detectionDetails?: {
    method: string;
    modelUsed: string;
    keyIndicators: string[];
    technicalAnalysis: string;
  };
}

const Dashboard = () => {
  const [analysisHistory, setAnalysisHistory] = useState<AnalysisResult[]>([]);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisHistory(prev => [result, ...prev]);
  };

  const stats = [
    {
      title: "Total Analyses",
      value: analysisHistory.length.toString(),
      icon: Brain,
      color: "text-primary",
    },
    {
      title: "Accuracy Rate",
      value: "94.2%",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Content Verified",
      value: analysisHistory.filter(r => r.result === "real").length.toString(),
      icon: Shield,
      color: "text-success",
    },
    {
      title: "Misinformation Detected",
      value: analysisHistory.filter(r => r.result === "fake").length.toString(),
      icon: History,
      color: "text-destructive",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            AI <span className="gradient-text">Verification Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Analyze content for misinformation, deepfakes, and manipulated media using advanced AI detection.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="card-ai">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 bg-secondary/20 rounded-lg ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <UploadCard onAnalysisComplete={handleAnalysisComplete} />
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            <Card className="card-ai">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="h-5 w-5 text-primary" />
                  <span>Analysis History</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Recent verification results and analysis details
                </p>
              </CardHeader>
              <CardContent>
                {analysisHistory.length === 0 ? (
                  <div className="text-center py-12">
                    <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">
                      No analyses yet. Upload content to get started!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {analysisHistory.map((result) => (
                      <ResultCard key={result.id} result={result} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;