export const projectsData = [
  // ─── Project 1: SkillSphere ───
  {
    id: 1,
    title: "SkillSphere – Online Learning Platform",
    image: "/projects/skillsphere.png", // Add screenshot
    shortDesc: "A modern online learning platform to explore courses, watch lessons, and enroll in skill-based programs.",
    stack: ["Next.js", "Tailwind CSS", "DaisyUI", "BetterAuth", "React Toastify"],
    description: "SkillSphere is an online learning platform where users can browse courses, view detailed course pages, and enroll. It features authentication (login/register with email & Google), a protected course details route, a user profile with update functionality, and a responsive layout.",
    liveLink: "https://skillsphere-online-learning-platform.vercel.app",
    githubLink: "https://github.com/ORNOB-083/-SkillSphere-Online-Learning-Platform", 
    challenges: "Integrating BetterAuth with Next.js App Router for authentication was tricky. Managing protected routes and redirects after login took careful planning. Implementing the search functionality with dynamic filtering on the All Courses page also required state management.",
    futurePlans: "Add payment integration, course progress tracking, quiz modules, and a discussion forum for students.",
  },
  // ─── Project 2: KeenKeeper ───
  {
    id: 2,
    title: "KeenKeeper – Personal Relationship Management",
    image: "/projects/keen-keeper.png",
    shortDesc: "A sophisticated PRM tool to help users maintain consistent connections with their network.",
    stack: ["Next.js", "Tailwind CSS", "React Icons", "Recharts", "React Toastify"],
    description: "KeenKeeper is a Personal Knowledge Vault for tracking interactions and ensuring no important relationship is overlooked. Features a dynamic friendship dashboard, interaction timeline, and advanced analytics with donut charts.",
    liveLink: "https://keen-keeper-083.vercel.app/",
    githubLink: "https://github.com/ORNOB-083/PH-B13-A07-Keen-Keeper",
    challenges: "Building the interactive charts with Recharts and making them responsive was challenging. Also, managing the status badges (Overdue, Almost Due, On-Track) with real-time updates required careful state management.",
    futurePlans: "Add reminders for follow-ups, integration with calendar APIs and AI-powered relationship insights.",
  },
  // ─── Project 3: DigiTools ───
  {
    id: 3,
    title: "DigiTools – Digital Tools Marketplace",
    image: "/projects/digitools.png",
    shortDesc: "A modern digital tools marketplace where users can browse and purchase productivity tools.",
    stack: ["React.js", "Tailwind CSS", "DaisyUI", "JavaScript (ES6+)", "React Toastify", "JSON"],
    description: "DigiTools provides a smooth user experience for product browsing, cart functionality, and checkout. Features a cart management system with real-time notifications and seamless navigation.",
    liveLink: "https://digitools-platform-083.netlify.app/",
    githubLink: "https://github.com/ORNOB-083/PH-B13-A6-DigiTools-Platform",
    challenges: "Managing the cart state across different components without a global state management tool was tricky. Ensuring the cart updates instantly when items are added or removed required careful state synchronization.",
    futurePlans: "Add user authentication, payment gateway integration, product reviews, and a wishlist feature.",
  },
  // ─── Project 4: SavePaws Club ───
  {
    id: 4,
    title: "SavePaws Club – Animal Rescue Platform",
    image: "/projects/savepaws.png",
    shortDesc: "A web-based platform to report and rescue animals with live location sharing.",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Google Maps API"],
    description: "SavePaws Club helps report and rescue animals by sharing live locations and contacting rescue teams. It offers offline emergency info, pet adoption, marketplace, vet consultations, blogs, and volunteering opportunities.",
    liveLink: "#", // Add live link 
    githubLink: "https://github.com/ORNOB-083/Software-Engineering-and-System-Analysis-Project",
    challenges: "Integrating Google Maps API for live location tracking was complex. Building the emergency offline mode that works without internet required creative solutions using local storage and service workers.",
    futurePlans: "Add GPS rescue vans tracking, volunteer training modules, a mobile app, and multi-language support.",
  },
  // ─── Project 5: GitHub Issue Tracker ───
  {
    id: 5,
    title: "GitHub Issue Tracker",
    image: "/projects/github-issue-tracker.png",
    shortDesc: "A web app to track GitHub issues with filtering, searching, and detailed views.",
    stack: ["HTML", "CSS (Tailwind/DaisyUI)", "JavaScript (Vanilla)", "GitHub API"],
    description: "An issue tracking tool that loads issues from a backend API. Features include tab-based filtering (All/Open/Closed), search functionality, a modal for issue details, and visual status indicators.",
    liveLink: "https://github-issue-tracker-083.netlify.app/",
    githubLink: "https://github.com/ORNOB-083/PH-B13-A5-Github-Issue-Tracker",
    challenges: "Handling the API calls and managing the loading states elegantly was tough. Implementing the search functionality while keeping the tabs functional required careful logic to avoid breaking the filtering system.",
    futurePlans: "Add pagination, user authentication, ability to create/edit issues, and real-time updates via WebSockets.",
  },
  // ─── Project 6: Job Tracker ───
  {
    id: 6,
    title: "Job Tracker",
    image: "/projects/job-tracker.png",
    shortDesc: "A job application tracker with interview and rejection management.",
    stack: ["HTML", "Tailwind", "JavaScript (Vanilla)"],
    description: "Job Tracker helps users manage their job applications. Features include dashboard stats, tab-based filtering (All/Interview/Rejected), card actions (Interview/Rejected/Delete), and real-time count updates.",
    liveLink: "https://ornob-083.github.io/PH-B13-A4-Job-Tracker/",
    githubLink: "https://github.com/ORNOB-083/PH-B13-A4-Job-Tracker",
    challenges: "Managing the toggle between Interview and Rejected buttons while updating the dashboard counts and tab contents required complex state logic. Also, deleting a card needed to update multiple UI sections simultaneously.",
    futurePlans: "Add user authentication, job application notes, deadlines/reminders, and integration with LinkedIn/Indeed APIs.",
  },
];