# VerifyAI

## Overview

**VerifyAI** is an AI-powered web application built to combat misinformation by detecting and explaining potential false, misleading, or manipulated content across multiple media types—including text, images, audio, and video. This project leverages Google’s state-of-the-art Gemini API for multi-modal AI inference, integrated securely with Firebase and Google Cloud to deliver trustworthy, explainable, and educational digital citizenship tools.

Unlike conventional fact-checkers, VerifyAI emphasizes explainability and media literacy by offering users clear reasoning, credibility tips, and an interactive dashboard to learn and build critical evaluation skills. The system is designed with ethical AI principles and user privacy at its foundation.

***

## Features

- **Multi-modal misinformation detection:** Analyze text content, AI-generated/manipulated visuals, synthetic audio, and deepfake videos.
- **Explainable AI:** Outputs detailed human-readable reasoning, confidence scores, and actionable tips to promote media literacy.
- **User-centric design:** Provides easy upload, real-time trust meter feedback, and a personalized history dashboard storing past analyses.
- **Gamification \& education:** Includes learning cards and quizzes to empower users to become informed digital citizens.
- **Secure and scalable:** Built on Firebase Authentication, Firestore, Storage, and Google Cloud Run backend with strict security and privacy controls.

***

## Ethical Considerations

VerifyAI is built to responsibly empower users against misinformation by:

- Avoiding authoritative verdicts; instead, providing explanatory reasoning and confidence transparently to encourage critical thinking.
- Ensuring user data privacy with strict Firebase security rules and no exposure of sensitive API keys on the client.
- Promoting inclusivity and accessibility with a clean, easy-to-use UI designed for broad audiences.
- Leveraging open, auditable cloud services and providing detailed logs for transparency during hackathon demos.
- Incorporating feedback loops for continuous improvement and mitigation of AI biases.

***

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Python 3.10+ for backend (if applicable)
- Google Cloud project with:
    - Gemini API enabled (Vertex AI or Generative Language API)
    - Firebase project with Firestore, Authentication, and Storage enabled


### Environment Variables

Create a `.env.local` file in the frontend root with:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url
```

On backend, securely store Gemini API keys and Firebase service account credentials—never embed in frontend code.

***

### Installation \& Run

#### Frontend

```bash
cd frontend
npm install
npm run dev
```


#### Backend

- Deploy FastAPI service with Google Cloud Run or Firebase Functions.
- Configure environment variables for Gemini API keys and Firestore credentials.
- Ensure backend URL matches `NEXT_PUBLIC_BACKEND_URL` in frontend.

***

## Project Structure

- `frontend/` — Next.js + TypeScript + TailwindCSS frontend with Firebase-auth integration
- `backend/` — FastAPI or Node.js backend handling uploads, Gemini API calls, and Firestore persistence
- `shared/` — TypeScript types and shared utilities for consistent data handling

***

## Usage Flow

1. User signs in securely via Google Authentication.
2. Uploads content (text/image/audio/video) for analysis.
3. Backend calls Gemini API with robust prompts and validates JSON structured responses.
4. Results shown with classification, trust meter, reasoning, and tips.
5. Each query and result stored per-user in Firestore.
6. User can review history, access educational materials, and complete quizzes to build media literacy.

***

## Security \& Privacy

- Firebase Authentication ensures user identity and protects personal data.
- Backend enforces authorization by validating Firebase ID tokens before processing requests.
- Strict security rules govern Firestore and Storage access, minimizing data exposure.
- Gemini API keys and sensitive cloud credentials remain on backend servers only.
- Data collected is solely for enhancing user experience and not shared externally.

***

## Limitations \& Future Improvements

- Model outputs depend on prompt quality; occasional misclassifications possible.
- Video/audio processing may incur latency; UI manages “processing” states gracefully.
- Support for more languages and region-specific misinformation patterns is planned.
- Potential integration of community feedback and crowdsourced corrections.
- More advanced gamification and educational content iterations.

***

## Contribution \& Code of Conduct

This open-source repository welcomes contributions focused on improving AI detection robustness, UI accessibility, and ethical AI practices. Please adhere to respectful conduct in all interactions.

***

## License

MIT License (see LICENSE file)

***

## Contact

- Maintainer: dhaarini1806@gmail.com / Email

***

Thank you for supporting responsible AI technologies to build a safer information ecosystem.

