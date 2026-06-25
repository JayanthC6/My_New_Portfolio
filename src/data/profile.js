export const profileData = {
  personal: {
    name: "Jayanth C",
    title: "Full-Stack Developer & AI/ML Engineer",
    tagline: "Aspiring Software Engineer | AI & Machine Learning Enthusiast | MCA Candidate",
    about: "Full-stack developer and MCA Graduate with hands-on experience building REST APIs, backend services, and AI-integrated systems using FastAPI, Flask, and Spring Boot. Proven track record of independently delivering full-stack applications end-to-end across MySQL, MongoDB, and PostgreSQL. Seeking a Backend Development Intern role to contribute to production-grade scalable systems.",
    avatarPlaceholder: "JC", // Initials for premium avatar component
    contact: {
      email: "jayanthjayanthc96@gmail.com",
      phone: "+91-8088912064",
      location: "Bengaluru, Karnataka, India",
      resumeUrl: "#", // Can be linked to public PDF path
      socials: {
        linkedin: "https://linkedin.com/in/jayanthc18",
        github: "https://github.com/JayanthC6",
        leetcode: "https://leetcode.com/u/JayanthC/",
        Hackerank: "https://www.hackerrank.com/profile/iconicno18"
      }
    }
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "JavaScript"]
    },
    {
      category: "Backend Development",
      items: ["FastAPI", "Flask", "REST APIs", "Spring Boot", "Node.js", "Express.js", "NestJS"]
    },
    {
      category: "Databases & ORM",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"]
    },
    {
      category: "AI & Machine Learning",
      items: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Google Gemini API", "Groq API", "CNN", "LLaMA 3.3"]
    },
    {
      category: "Authentication & Security",
      items: ["JWT", "REST API security", "Role-based access control"]
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Docker", "Render"]
    }
  ],
  experience: [
    {
      company: "CampusPe",
      role: "Full Stack Development Intern (Java)",
      location: "Remote",
      period: "Feb 2026 – May 2026",
      duration: "4 months",
      highlights: [
        "Sole developer of the DPDP Act Consent Audit Trail - a Full-Stack compliance platform with React frontend, Python Flask + AI backend, and Java Spring Boot + MySQL; independently delivered all three tiers when team members were unavailable, originally scoped as a 5-person project.",
        "Designed Spring Boot backend including database schema, JWT-secured REST API endpoints, and MySQL connectivity; additionally built a MERN stack Task Management app with full CRUD, demonstrating adaptability across Java and JavaScript ecosystems."
      ]
    },
    {
      company: "AISECT Pvt.Ltd",
      role: "Data Science / ML Intern",
      location: "Bengaluru, Karnataka",
      period: "Nov 2023 – Mar 2024",
      duration: "5 months",
      highlights: [
        "Built data preprocessing pipelines in Python using Pandas and NumPy; developed interactive visualizations with Matplotlib and Seaborn integrated into web dashboards to surface business insights, demonstrating practical backend data integration experience.",
        "Evaluated and reported model performance metrics across classification tasks; wrote clean, well-documented Python code following software development best practices to improve ML model input quality and training consistency."
      ]
    }
  ],
  projects: [
    {
      title: "NeuroSymbolic AI Brain Tumor Diagnosis System",
      tech: ["Python", "FastAPI", "TensorFlow", "CNN", "MongoDB"],
      github: "https://github.com/JayanthC6",
      problem: "Brain tumor classification from MRI scans requires high accuracy and a safeguard mechanism to flag anatomically implausible AI predictions before reporting.",
      approach: "Trained a Convolutional Neural Network (CNN) model using TensorFlow to classify tumors (glioma, meningioma, pituitary) from MRI scans. Developed an asynchronous FastAPI backend with Swagger documentation and MongoDB storage, and integrated a rule-based validation layer to verify prediction plausibility.",
      result: "Achieved 93% classification accuracy on a held-out test set of 7000+ images (verified via scikit-learn report) and successfully flagged abnormal/implausible results.",
      bullets: [
        "Trained a CNN model using TensorFlow for brain tumor classification from MRI scans, achieving 93% accuracy on a held-out test set of 7000+ images, verified via scikit-learn's classification report.",
        "Built a FastAPI backend with async REST endpoints and Swagger/OpenAPI documentation, with MongoDB integration for storing prediction results; prototyped a rule-based validation layer to flag anatomically implausible predictions."
      ]
    },
    {
      title: "IPL Analytics & Auction Intelligence System",
      tech: ["Python", "Flask", "MySQL", "Scikit-learn", "Power BI", "Groq API", "Chart.js"],
      github: "https://github.com/JayanthC6",
      problem: "Extracting strategic bidding insights from massive, multi-year IPL cricket match records (1,090+ matches, 260,000+ records) using natural language rather than complex SQL querying.",
      approach: "Engineered an IPL analytics dashboard using Flask, MySQL, and Chart.js, incorporating a Random Forest match winner predictor. Integrated a Text-to-SQL AI Engine powered by LLaMA 3.3-70b via the Groq API to translate natural language user queries into executable SQL queries on the fly.",
      result: "Enabled franchise decision-makers to query player performance stats in natural language and receive immediate retention and bidding recommendations based on 8 key business-insight SQL metrics.",
      bullets: [
        "Engineered an IPL analytics platform analyzing 1,090 matches and 260,000+ ball-by-ball records, implementing 8 business-insight SQL queries, a Random Forest match predictor, and interactive Chart.js dashboards.",
        "Built an AI Auction Intelligence engine using Text-to-SQL - LLaMA 3.3-70b via Groq API converts natural language franchise queries into MySQL queries, returning actionable player retention and bidding recommendations."
      ]
    },
    {
      title: "HiredLens",
      tech: ["NestJS", "React.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Google Gemini API", "Docker", "Render"],
      github: "https://github.com/JayanthC6",
      live: "https://ai-resume-optimizer-1-z3xt.onrender.com/",
      problem: "Job seekers need automated, highly contextual resume optimization and an interactive way to practice coding and behavioral interviews in real-time.",
      approach: "Integrated Google Gemini API to build a semantic resume optimizer that analyzes resume drafts and spits out custom 90-day learning roadmaps and high-fidelity PDF/LaTeX exports. Constructed a real-time coding arena utilizing the Monaco Editor and a simulated AI interviewer.",
      result: "Engineered and deployed a full-stack monorepo containerized with Docker and hosted on Render, enabling real-time mock interviews with live code evaluation and AI feedback.",
      bullets: [
        "Integrated Google Gemini API to build a semantic resume optimization engine generating personalized 90-day learning roadmaps and high-fidelity PDF/LaTeX exports.",
        "Engineered a real-time technical interview platform with Monaco-based Coding Arena and AI interviewer; deployed full-stack NestJS/React monorepo on Render."
      ]
    }
  ],
  education: [
    {
      institution: "Bangalore Institute of Technology",
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Science",
      period: "2024 – June 2026",
      location: "Bengaluru, Karnataka",
      details: "CGPA: 8.84 / 10 (upto Semester III)"
    },
    {
      institution: "VET First Grade College",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Science",
      period: "2021 – 2024",
      location: "Bengaluru, Karnataka",
      details: "CGPA: 8.83 / 10"
    }
  ],
  certifications: [
    {
      name: "Cloud Computing Fundamentals",
      issuer: "IBM"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco"
    },
    {
      name: "Programming Using Python",
      issuer: "Infosys Springboard"
    }
  ]
};
