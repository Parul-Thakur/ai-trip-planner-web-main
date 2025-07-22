🌍 AI Travel Planner





🚀 Overview
AI Travel Planner is a modern travel planning web application powered by Google Generative AI (Gemini models). Plan your trips effortlessly with AI-generated itineraries, autocomplete location search, and seamless backend integration using Firebase.

Built with React, Vite, TailwindCSS, and ShadCN UI, it offers a smooth user experience enhanced by Radix UI components and dark/light theme support.

✈️ Features
🤖 AI-Powered Itineraries: Generate personalized travel plans using Google Gemini AI models.

🧭 Location Autocomplete: Fast & accurate place suggestions via Google Places API.

🔐 Secure Backend: Firebase for authentication, storage, and real-time database.

💅 Beautiful UI: TailwindCSS and ShadCN UI for stunning visuals and responsiveness.

🌗 Theme Support: Switch between light and dark modes with next-themes.

🔥 Smooth Interactions: Powered by Radix Dialogs, Popovers, and seamless transitions.

🧑‍💻 Tech Stack
Layer	Technology
Frontend	React 18, Vite, TailwindCSS, ShadCN UI
AI Integration	@google/generative-ai (Gemini 1.5/2.5)
Backend	Firebase (Auth, Firestore, Storage)
Routing	React Router
Theming	next-themes
Icons	lucide-react, react-icons

🛠️ Getting Started
Follow these steps to run the project locally:
# 1. Clone the repository
git clone https://github.com/your-username/ai-travel-planner.git
cd ai-travel-planner

# 2. Install dependencies
npm install

# 3. Setup environment variables
# Create a .env file in the root directory with the following:

VITE_GOOGLE_API_KEY=your_google_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
# Add other necessary Firebase variables here

# 4. Start the development server
npm run dev
Open http://localhost:3000 in your browser to view the app.

📁 Project Structure

src/
├── components/       # Reusable UI components
├── pages/            # Application pages and routes
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
└── styles/           # Tailwind & custom styles
⚙️ Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build
npm run lint	Run lint checks

🚀 Deployment
Deploy your app easily on popular platforms:

Vercel — https://vercel.com/

Firebase Hosting — https://firebase.google.com/docs/hosting

Netlify — https://www.netlify.com/

Important: Add your environment variables in the platform's dashboard for smooth production builds.

📄 License
This project is licensed under the MIT License.


