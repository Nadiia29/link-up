🧩 Social Network UI — Frontend Simulator of a Social Platform

This is the frontend part of a project simulating a social networking platform for communication. Built with React, TypeScript, and Redux Toolkit, it offers a modern, responsive, and customizable user interface that replicates key social media features.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

📌 Overview

This application includes:

Home Page — the main entry point with general info.

Authentication — login/register via simulated API calls.

User Profile — view and customize your personal profile.

Posts Feed — display and interact with user posts.

Messages — private messaging interface.

Settings — manage account preferences and UI options.

Users can personalize their experience by choosing an avatar and profile background from a built-in image gallery.

🧠 Backend Emulation (Browser-Based)

The backend logic is fully emulated inside the browser, meaning no external server or database is required to run the app.

🔧 How it works:

A virtual backend simulates endpoints for authentication, profile data, posts, and messaging.

LocalStorage and/or in-memory state is used to persist data between sessions.

HTTP requests are simulated via Axios, routed to mock handlers within the app.

This allows a seamless demonstration of a full-stack experience using only frontend technologies.

🎨 Features

Login & registration flow with validation.

Edit profile: update avatar and background image.

Post creation and interaction: simulate likes, edits, and deletions.

Private messaging system between users.

User settings interface.

Responsive design for mobile and desktop use.

🛠️ Technologies

React — component-based UI.

TypeScript — static typing for scalable code.

Redux Toolkit — state management.

SCSS — modular styling with variables and mixins.

Axios — for simulated HTTP requests.

React Router DOM — client-side routing.

UUID — generating unique IDs.

Classnames — utility for dynamic class binding.

🚀 Getting Started
Clone the repository:

bash
git clone https://github.com/your-username/social-network-ui.git
Navigate to the project folder:

bash
cd social-network-ui
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Once running, open http://localhost:3000 to view the app.

No backend setup is required — everything runs locally in the browser.

📦 Bundled Libraries

react-router-dom — routing and navigation.

@reduxjs/toolkit, react-redux — state management.

axios — API call simulation.

uuid — generate unique identifiers.

classnames — conditional styling.

eslint, prettier — code formatting and linting.

📈 Future Plans

🎨 Add light/dark theme toggling.

🌍 Implement multilingual interface.

🔧 Profile import/export and settings backup.
