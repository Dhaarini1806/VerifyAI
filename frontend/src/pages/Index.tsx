import { ArrowRight, Shield, Brain, Users, CheckCircle, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-ai-verification.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms analyze content patterns to identify potential misinformation and deepfakes."
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Get instant results on text, images, audio, and video content with confidence scores and detailed explanations."
    },
    {
      icon: Shield,
      title: "Multi-Format Support",
      description: "Verify authenticity across all media types: articles, social posts, images, videos, and audio recordings."
    },
    {
      icon: Users,
      title: "Educational Resources",
      description: "Learn digital literacy skills and stay informed about the latest misinformation tactics and detection methods."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your uploaded content is processed securely and not stored permanently, ensuring your privacy and data protection."
    },
    {
      icon: CheckCircle,
      title: "Fact-Check Integration",
      description: "Connect with trusted fact-checking sources and cross-reference claims with verified information databases."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Combat <span className="gradient-text">Misinformation</span> with AI
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Advanced AI-powered detection for fake news, deepfakes, and manipulated content. 
                  Build digital literacy and protect yourself from misinformation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button className="btn-hero w-full sm:w-auto">
                    Start Analyzing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/education">
                  <Button variant="outline" className="btn-ghost w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Privacy focused</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>AI-powered</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="card-ai p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/20 rounded-xl animate-pulse-glow">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">VerifyAI Engine</h3>
                      <p className="text-sm text-muted-foreground">Active & Analyzing</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-success/20 rounded-lg p-3 border border-success/30">
                      <div className="text-lg font-bold text-success">94.2%</div>
                      <div className="text-xs text-muted-foreground">Accuracy Rate</div>
                    </div>
                    <div className="bg-primary/20 rounded-lg p-3 border border-primary/30">
                      <div className="text-lg font-bold text-primary">1.2M+</div>
                      <div className="text-xs text-muted-foreground">Content Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">VerifyAI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive misinformation detection powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-ai">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-ai p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Fight <span className="gradient-text">Misinformation</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the movement for digital truth. Start analyzing content and building your media literacy skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="btn-hero w-full sm:w-auto">
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/education">
                <Button variant="outline" className="btn-ghost w-full sm:w-auto">
                  Educational Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
