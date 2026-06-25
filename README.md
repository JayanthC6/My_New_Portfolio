# Jayanth C - Personal Portfolio Website

This is a premium, interactive personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. It is initialized directly from resume and LinkedIn data.


## 🚀 Live Demo
**Portfolio URL:** [ https://jayanthc6.github.io/My_New_Portfolio/](https://jayanthc6.github.io/My_New_Portfolio/)


## Features

- **Responsive & Mobile-First**: Built from the ground up for seamless browsing across desktops, tablets, and phones.
- **Unified Technical Identity**: Showcases Full-Stack Development and AI/ML engineering domains.
- **Scrollspy Navigation**: Sticky header navbar with active-section indicators and smooth scroll tracking.
- **Interactive Experience Timeline**: Custom vertical timeline displaying internship milestones and achievements.
- **Problem-Approach-Result Projects**: Individual project cards broken down into core design parameters (Problem, Approach, Result).
- **Smooth Framer Motion Transitions**: Subtle, high-performance entrance animations on scroll.
- **Dark Mode**: Fully supports Dark (default) and Light mode switching.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Setup & Run Instructions

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then execute:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

## Folder Structure

```text
My_Resume/
├── index.html           # HTML template & Font configurations
├── package.json         # Scripts and project dependencies
├── tailwind.config.js   # Tailwind configurations
├── postcss.config.js    # PostCSS configurations
├── vite.config.js       # Vite build configurations
├── README.md            # Setup guidelines
└── src/
    ├── main.jsx         # App mounting entry point
    ├── index.css        # Tailwind directives and custom animation styles
    ├── App.jsx          # Main Layout component
    ├── data/
    │   └── profile.js   # Extracted Resume Data (Edit this file to update content)
    └── components/
        ├── Navbar.jsx   # Header Navigation & Theme toggle
        ├── Hero.jsx     # Profile introduction & CTAs
        ├── About.jsx    # Bio summary and developer pillars
        ├── Experience.jsx# Interactive vertical timeline
        ├── Skills.jsx   # Grouped skills matrix
        ├── Projects.jsx # Problem-Approach-Result project grid
        ├── Education.jsx# Education milestones & Certifications
        ├── Contact.jsx  # Contact form with input validation
        └── Footer.jsx   # Footer details
```

## Customizing Content

All data is separated from the component code and is stored in `src/data/profile.js`. To update your email, phone, bio, internships, skills, or projects, simply modify `src/data/profile.js`.

### Note on Placeholder Assets

- **Resume Download Link**: In `src/components/Hero.jsx` and `src/data/profile.js`, the resume download button points to `file:///c:/Users/jayanth/OneDrive/Desktop/My_Resume/Jayanth__Resume__.pdf`. You can update the path in `src/data/profile.js` (`personal.contact.resumeUrl`) to host the PDF file publicly or reference it locally.
- **Profile Image/Avatar**: The portfolio uses a premium text-based initials avatar (`JC`) under the About section instead of a static image, which fits a modern, clean developer aesthetic. If you'd like to use a profile photo, you can replace the avatar block in `src/components/About.jsx` with an `<img>` tag pointing to your image path.
