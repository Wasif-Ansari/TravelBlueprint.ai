Live Link: https://travelblueprintai.wasif.dpdns.org/

# TravelBlueprint.ai

Welcome to the **TravelBlueprint.ai** project repository! This project is an AI-powered trip planning application that simplifies travel planning by providing personalized itineraries tailored to user preferences. The platform leverages cutting-edge AI technologies to curate trips, ensuring a seamless and hassle-free travel experience.

---

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

**TravelBlueprint.ai** is designed to assist users in planning their trips efficiently by generating customized itineraries based on their preferences, such as destination, budget, and activities of interest. This project demonstrates the integration of AI with web technologies to deliver an intuitive and user-friendly trip planning experience.

---

## Key Features

- **Environment Setup with Vite:** Optimized development environment using Vite.
- **Firebase Integration:** Secure and scalable database for storing user data.
- **Google Authentication:** Seamless and secure login using Google.
- **Trip Generation with Gemini AI:** AI-powered trip recommendations and itineraries.
- **React Routing:** Smooth navigation between pages.
- **Shadcn/UI Integration:** Consistent and aesthetic UI components.
- **Google Autocomplete:** Enhanced user experience with location suggestions.
- **Display Place Photos:** Fetch and display images using Google Photo API.
- **Full Responsiveness:** Optimized for all screen sizes and devices.
- **Deployment on Vercel:** Easy and reliable hosting solution.

---

## Tech Stack

- **Frontend:** Vite React.js, Tailwind CSS
- **Backend:** Gemini AI
- **Database:** Firebase
- **AI Integration:** Gemini AI
- **Hosting:** Vercel
- **Environment Management:** dotenv for configuration

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Wasif-Ansari/TravelBlueprint.ai.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd TravelBlueprint.ai
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file with the following:
     ```env
     VITE_FIREBASE_CONFIG=<Your Firebase Configuration>
     VITE_GEMINI_API_KEY=<Your Gemini AI API Key>
     VITE_GOOGLE_API_KEY=<Your Google API Key>
     ```

5. **Run the Application:**
   ```bash
   npm run dev
   ```

6. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. Input your trip details, such as destination, dates, budget, and preferences.
2. View the AI-generated itinerary with day-by-day plans and recommendations.
3. Make adjustments to your trip preferences in real-time.
4. Save or share the final itinerary.

---

## Folder Structure

The project is organized as follows:

```
TravelBlueprint.ai/
├── src/                # Source files
│   ├── components/     # Reusable React components
│   ├── pages/          # Application pages
│   ├── services/       # API integration
│   └── App.jsx         # Main application component
│
├── public/             # Static assets
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## Future Improvements

- Multi-language support for global users.
- Integration with flight and hotel booking APIs.
- Enhanced budget tracking with real-time cost updates.
- Mobile application version for on-the-go planning.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in compliance with the license.

---

Thank you for exploring the TravelBlueprint.ai project! For questions or feedback, feel free to reach out via the repository's [Issues](https://github.com/Wasif-Ansari/TravelBlueprint.ai/issues) section.




