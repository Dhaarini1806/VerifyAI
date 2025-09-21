import { Shield, Eye, Brain, BookOpen, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const impactPoints = [
    {
      icon: AlertTriangle,
      title: "Political Manipulation",
      description: "Deepfakes can spread false speeches before elections, undermining democratic processes and voter trust.",
      impact: "High",
      color: "text-destructive",
    },
    {
      icon: XCircle,
      title: "Financial Scams",
      description: "AI voice cloning used in fraud - calling people pretending to be their boss, family members, or trusted contacts.",
      impact: "High",
      color: "text-destructive",
    },
    {
      icon: AlertTriangle,
      title: "Social Harm",
      description: "Fake images/videos spread panic with false reports of accidents, disasters, or public safety threats.",
      impact: "Medium",
      color: "text-warning",
    },
    {
      icon: Shield,
      title: "Trust Erosion",
      description: "People lose confidence in media, journalism, and even personal communications, weakening social fabric.",
      impact: "Critical",
      color: "text-destructive",
    },
  ];

  const detectionMethods = [
    {
      type: "Text Detection",
      icon: BookOpen,
      techniques: [
        "AI writing pattern analysis (repetition, lack of personal experience)",
        "Linguistic feature extraction and ML model classification",
        "Unnatural word choice and sentence structure detection",
        "Metadata analysis for generation timestamps"
      ],
      accuracy: "85-92%",
      color: "text-primary",
    },
    {
      type: "Image Detection",
      icon: Eye,
      techniques: [
        "Pixel-level artifact detection (extra fingers, distorted backgrounds)",
        "GAN-fingerprint detection for AI model traces",
        "Inconsistent lighting and shadow analysis",
        "EXIF metadata verification for camera authenticity"
      ],
      accuracy: "78-88%",
      color: "text-success",
    },
    {
      type: "Video Detection",
      icon: Brain,
      techniques: [
        "Frame-by-frame analysis for face swap detection",
        "Lip-sync mismatch and unnatural blinking patterns",
        "Temporal inconsistency detection between frames",
        "Facial landmark tracking and verification"
      ],
      accuracy: "72-85%",
      color: "text-warning",
    },
    {
      type: "Audio Detection",
      icon: Shield,
      techniques: [
        "Spectrogram analysis for voice synthesis artifacts",
        "Natural breathing pattern verification",
        "Background noise consistency checking",
        "Frequency pattern analysis for robotic smoothness"
      ],
      accuracy: "80-90%",
      color: "text-info",
    },
  ];

  const tips = [
    {
      icon: Eye,
      title: "Reverse Image Search",
      description: "Use Google Images, TinEye, or Yandex to verify if an image has been used elsewhere or manipulated.",
      level: "Basic",
      color: "text-success",
    },
    {
      icon: Brain,
      title: "Check Multiple Sources",
      description: "Cross-reference information across 3-5 credible news sources before believing or sharing content.",
      level: "Basic",
      color: "text-success",
    },
    {
      icon: Shield,
      title: "Analyze Visual Artifacts",
      description: "Look for blurry edges, inconsistent lighting, unnatural eye movements, or missing reflections in images/videos.",
      level: "Intermediate",
      color: "text-warning",
    },
    {
      icon: BookOpen,
      title: "Question Emotional Content",
      description: "Be extra skeptical of content designed to provoke strong emotional reactions - anger, fear, or outrage.",
      level: "Advanced",
      color: "text-info",
    },
    {
      icon: CheckCircle,
      title: "Verify Author Credentials",
      description: "Check if the author/publisher has a track record, contact information, and transparent editorial standards.",
      level: "Intermediate",
      color: "text-warning",
    },
    {
      icon: AlertTriangle,
      title: "Check Timestamps",
      description: "Verify publication dates and ensure content isn't recycled from old events presented as current news.",
      level: "Basic",
      color: "text-success",
    },
  ];

  const redFlags = [
    {
      icon: XCircle,
      text: "Emotionally charged headlines designed to provoke anger or fear",
      severity: "high",
      example: "SHOCKING: This Will Make You FURIOUS!"
    },
    {
      icon: AlertTriangle,
      text: "Poor grammar, spelling errors, or unprofessional presentation",
      severity: "medium",
      example: "Breaking: Goverment Officials Admits Coverup"
    },
    {
      icon: XCircle,
      text: "No author information, publication date, or contact details provided",
      severity: "high",
      example: "Anonymous sources, no byline, no verification"
    },
    {
      icon: AlertTriangle,
      text: "Claims that seem too good/bad to be true without evidence",
      severity: "medium",
      example: "Miracle cure doctors don't want you to know!"
    },
    {
      icon: XCircle,
      text: "Urgent requests to share immediately without verification",
      severity: "high",
      example: "Share before they delete this!"
    },
    {
      icon: AlertTriangle,
      text: "Pixelated or low-quality images that hide manipulation",
      severity: "medium",
      example: "Blurry screenshots instead of original sources"
    },
  ];

  const resources = [
    {
      name: "Snopes",
      description: "The definitive Internet reference source for fact-checking urban legends, folklore, myths, rumors, and misinformation.",
      url: "https://snopes.com",
      specialty: "Urban Legends & Viral Content",
    },
    {
      name: "FactCheck.org",
      description: "A nonpartisan, nonprofit 'consumer advocate' for voters that aims to reduce the level of deception and confusion in U.S. politics.",
      url: "https://factcheck.org",
      specialty: "Political Claims",
    },
    {
      name: "PolitiFact",
      description: "Fact-checking website that rates the accuracy of claims by elected officials and others on its Truth-O-Meter.",
      url: "https://politifact.com",
      specialty: "Political Statements",
    },
    {
      name: "AP Fact Check",
      description: "Associated Press's fact-checking initiative that examines claims by political figures and institutions.",
      url: "https://apnews.com/ap-fact-check",
      specialty: "News Verification",
    },
    {
      name: "Reuters Fact Check",
      description: "Reuters team dedicated to identifying and debunking false information shared online.",
      url: "https://reuters.com/fact-check",
      specialty: "Global News",
    },
    {
      name: "Alt News (India)",
      description: "Indian fact-checking website that debunks fake news and misinformation in Indian media.",
      url: "https://altnews.in",
      specialty: "Indian Content",
    },
  ];

  const cybercrimeResources = [
    {
      country: "Global",
      agencies: [
        { name: "FBI Internet Crime Complaint Center", url: "https://ic3.gov", description: "Report internet crimes to FBI" },
        { name: "Interpol Cybercrime", url: "https://interpol.int/cybercrime", description: "International cybercrime reporting" },
      ]
    },
    {
      country: "United States",
      agencies: [
        { name: "FBI IC3", url: "https://ic3.gov", description: "Federal cybercrime reporting" },
        { name: "FTC Consumer Sentinel", url: "https://reportfraud.ftc.gov", description: "Consumer fraud reporting" },
      ]
    },
    {
      country: "India",
      agencies: [
        { name: "National Cyber Crime Portal", url: "https://cybercrime.gov.in", description: "Report cyber crimes in India" },
        { name: "Cyber Crime Cell Mumbai", url: "https://mumbaipolice.gov.in/cybercrime", description: "Mumbai cyber crime reporting" },
      ]
    },
    {
      country: "United Kingdom",
      agencies: [
        { name: "Action Fraud", url: "https://actionfraud.police.uk", description: "UK's national fraud reporting centre" },
        { name: "NCSC", url: "https://ncsc.gov.uk/report", description: "National Cyber Security Centre" },
      ]
    },
    {
      country: "Canada",
      agencies: [
        { name: "Canadian Anti-Fraud Centre", url: "https://antifraudcentre.ca", description: "Report fraud and cybercrime" },
        { name: "RCMP Cybercrime", url: "https://rcmp-grc.gc.ca/cybercrime", description: "Royal Canadian Mounted Police cybercrime unit" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Digital Literacy <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding AI-generated content and building resilience against misinformation in 2025. 
            Learn detection techniques, spot red flags, and protect yourself from digital deception.
          </p>
        </div>

        {/* Why It Matters Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔎 Why Fake Content Detection <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              With AI tools like ChatGPT, Gemini, Stable Diffusion, MidJourney, and Sora, anyone can generate 
              text, images, audio, and video that looks completely real. The explosion of AI-generated media 
              is reshaping how we consume and trust information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {impactPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="card-ai">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <div className={`p-2 bg-secondary/20 rounded-lg ${point.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span>{point.title}</span>
                      </CardTitle>
                      <Badge variant="outline" className={
                        point.impact === "Critical" ? "status-fake" : 
                        point.impact === "High" ? "status-uncertain" : "status-real"
                      }>
                        {point.impact} Impact
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How Detection Works */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              ⚙️ How AI Detection <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Modern detection systems combine multiple AI models with metadata analysis. 
              Here's how our system identifies different types of fake content:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detectionMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="card-ai">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className={`p-2 bg-secondary/20 rounded-lg ${method.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span>{method.type}</span>
                      <Badge variant="outline" className="ml-auto">
                        {method.accuracy} Accuracy
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {method.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Detection Tips */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🧩 Practical <span className="gradient-text">Detection Tips</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Even the best AI detection tools can't guarantee 100% accuracy. These human-powered techniques 
              will help you identify suspicious content and verify information authenticity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index} className="card-ai">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <div className={`p-2 bg-secondary/20 rounded-lg ${tip.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm">{tip.title}</span>
                      </CardTitle>
                      <Badge variant="outline" className={
                        tip.level === "Basic" ? "status-real" : 
                        tip.level === "Intermediate" ? "status-uncertain" : "status-fake"
                      }>
                        {tip.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🚨 Warning <span className="gradient-text">Signs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Learn to recognize these common red flags that often indicate misinformation, 
              deepfakes, or manipulated content.
            </p>
          </div>
          <Card className="card-ai">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-warning" />
                <span>Common Red Flags of Misinformation</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Watch out for these warning signs when consuming digital content
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {redFlags.map((flag, index) => {
                  const Icon = flag.icon;
                  return (
                    <div key={index} className="p-4 bg-secondary/10 rounded-lg border-l-4 border-l-warning">
                      <div className="flex items-start space-x-3">
                        <div className={`p-1 rounded ${
                          flag.severity === "high" ? "bg-destructive/20 text-destructive" : "bg-warning/20 text-warning"
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed font-medium">{flag.text}</p>
                          <p className="text-xs text-muted-foreground mt-1 italic">
                            Example: "{flag.example}"
                          </p>
                        </div>
                        <Badge variant="outline" className={
                          flag.severity === "high" ? "status-fake" : "status-uncertain"
                        }>
                          {flag.severity} risk
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              ✅ Trusted <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Professional fact-checking websites and verification tools to help you 
              confirm the authenticity of news, claims, and viral content.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="card-ai">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <Badge variant="outline" className="status-real text-xs">
                      {resource.specialty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{resource.description}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                  >
                    Visit Website →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cybercrime Reporting */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🛡️ Cybercrime <span className="gradient-text">Reporting</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              If you encounter deepfakes, fraud attempts, or malicious AI-generated content, 
              report it to the appropriate authorities in your region.
            </p>
          </div>
          <div className="space-y-8">
            {cybercrimeResources.map((region, index) => (
              <Card key={index} className="card-ai">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>{region.country}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {region.agencies.map((agency, agencyIndex) => (
                      <div key={agencyIndex} className="p-3 bg-secondary/10 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{agency.name}</h4>
                          <a
                            href={agency.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-glow text-xs"
                          >
                            Report →
                          </a>
                        </div>
                        <p className="text-xs text-muted-foreground">{agency.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="card-ai max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stay Vigilant</h3>
              <p className="text-muted-foreground mb-6">
                Digital literacy is an ongoing journey. Keep learning, stay skeptical, and always verify before you share.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/dashboard" className="btn-hero inline-block px-6 py-2 rounded-lg text-center">
                  Try AI Detection
                </a>
                <a href="#" className="btn-ghost inline-block px-6 py-2 rounded-lg text-center">
                  Learn More
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;