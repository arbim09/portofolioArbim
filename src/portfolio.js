/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arya Bima",
  title: "Hi all, I'm Arya",
  subTitle: emoji(
    "A passionate Backend / Full-Stack Developer 🚀 with experience building reliable backend systems, REST APIs, integrations, and web applications with .NET, Laravel, PostgreSQL, Vue.js, and modern development tools."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1afFYVK7w5Xt-Qw1cmRhPQPrMjOkgZ_uC?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arbim09",
  linkedin: "https://linkedin.com/in/aryabimafajarnugraha09",
  gmail: "aryafajar111@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND / FULL-STACK DEVELOPER SPECIALIZING IN RELIABLE SYSTEMS AND INTEGRATIONS",
  skills: [
    emoji(
      "⚡ Develop backend services and REST APIs using ASP.NET Core and Laravel"
    ),
    emoji("⚡ Build laboratory instrument integrations with HL7/ASTM protocols"),
    emoji(
      "⚡ Design and manage database systems with PostgreSQL and MySQL"
    ),
    emoji(
      "⚡ Develop web applications with Vue.js, Nuxt.js, and modern frontend technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "csharp",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "dotnet",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database Design",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "System Integration",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",
      company: "PT Penta Indotek Mandiri",
      companylogo: require("./assets/images/logopenta.jpeg"),
      date: "2023 – Present",
      desc: "Full-Stack Developer working on Petain, Inscare, and Customer Service (HelpIo) projects.",
      descBullets: [
        "Develop backend services and REST APIs using ASP.NET Core",
        "Build and maintain laboratory instrument integrations (Inscare)",
        "Develop middleware for communication between instruments and LIS",
        "Build remote monitoring dashboard (Petain)",
        "Develop customer service application with Vue 3 and C# (HelpIo)",
        "Work with PostgreSQL and Entity Framework Core",
        "Troubleshoot application and deployment issues on Linux and Windows",
        "Perform API testing and load testing"
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "SuitCareer",
      companylogo: require("./assets/images/SuitCareer.jpeg"),
      date: "2022",
      desc: "Developed village data management website and public service systems.",
      descBullets: [
        "Developed a village data management website",
        "Implemented village information publication features",
        "Developed ambulance calling functionality",
        "Developed organization management functionality",
        "Worked across frontend, backend, and database layers"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "SOME KEY PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/INSCARE_LOGO.png"),
      projectName: "Inscare",
      projectDesc: "Laboratory Information & Instrument Integration System - Healthcare platform for laboratory workflows and LIS integration",
      footerLink: []
    },
    {
      image: require("./assets/images/instrument.png"),
      projectName: "Instrument Middleware",
      projectDesc: "Laboratory Instrument Integration Middleware - TCP socket communication with HL7/ASTM protocols",
      footerLink: []
    },
    {
      image: require("./assets/images/logopetain.png"),
      projectName: "Petain (Pemantauan Interface)",
      projectDesc: "Remote monitoring dashboard for PM2 applications across multiple sites",
      footerLink: []
    },
    {
      image: require("./assets/images/helpIo.png"),
      projectName: "HelpIo",
      projectDesc: "Customer Service application built with Vue 3 and C#",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Available For 💼"),
  subtitle: "I'm interested in backend engineering, system integration, and solving real-world technical problems",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "aryafajar111@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
