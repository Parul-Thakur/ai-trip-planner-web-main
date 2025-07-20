🌍 AI Travel Planner
A modern travel planning application powered by Google Generative AI, built with React, Vite, and styled using TailwindCSS and ShadCN UI components. Firebase handles backend services like auth and storage.

🚀 Features
✈️ AI-generated travel itineraries using Google Gemini

🧭 Location autocomplete with Google Places API

💾 Firebase backend for data and auth

💅 Styled with TailwindCSS + ShadCN UI

🔥 Smooth UX with Radix Dialogs, Popovers & theme support

🧑‍💻 Tech Stack
Frontend: React 18, Vite, TailwindCSS, ShadCN UI

AI Integration: @google/generative-ai (Gemini 1.5/2.5)

Auth & DB: Firebase

Routing: React Router

Theming: next-themes

Icons: lucide-react, react-icons

🛠️ Getting Started
1. Clone the repo

git clone https://github.com/your-username/ai-travel-planner.git
cd ai-travel-planner
2. Install dependencies

npm install
3. Add environment variables
Create a .env file:

VITE_GOOGLE_API_KEY=your_google_key
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_PROJECT_ID=your_project_id
...
(Don't forget to add .env to .gitignore)

4. Run the app

npm run dev
🏗️ Project Structure
css
Copy
Edit
src/
├── components/
├── pages/
├── hooks/
├── utils/
└── styles/
⚙️ Scripts
npm run dev – Start dev server

npm run build – Production build

npm run preview – Preview production

npm run lint – Lint the project

📦 Deployment
You can deploy this on Vercel, Firebase Hosting, or Netlify. Don’t forget to add your env variables in their respective dashboards.

📄 License
MIT