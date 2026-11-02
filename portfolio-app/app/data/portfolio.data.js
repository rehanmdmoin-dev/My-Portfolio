// All portfolio content lives here, edit this file to update the website
module.exports = {
  profile: {
    name: "Md Moin Rehan",
    firstName: "Rehan",
    roles: ["Full-Stack MERN Developer", "WordPress Developer", "UI/UX Designer"],
    intro:
      "I build secure, scalable and user-friendly web applications with the MERN stack. I also develop WordPress websites and design clean interfaces in Figma.",
    about: [
      "I'm a full-stack developer from Kolkata with a strong foundation in JavaScript, React, Next.js, Node.js, Express and MongoDB. I care about clean code, solid architecture and interfaces people enjoy using.",
      "I started in UI design and WordPress, then moved into full-stack development. My projects use JWT authentication, role-based access control, REST APIs and MongoDB aggregation pipelines.",
      "I'm looking for a challenging position where I can contribute my web development skills, deliver high-quality digital solutions and improve user engagement.",
    ],
    email: "rehanmdmoin@gmail.com",
    phone: "8961218460",
    location: "Kolkata, West Bengal, India",
    github: "https://github.com/rehanmdmoin-dev",
    linkedin: "https://www.linkedin.com/in/md-moin-rehan-27780a30b",
  },

  stats: [
    { value: "6", label: "Projects Completed" },
    { value: "100+", label: "API Endpoints Built" },
    { value: "3", label: "Certifications" },
  ],

  journey: [
    { date: "2026 – Present", title: "Full-Stack Developer", text: "Building MERN stack applications at Web Skitters Academy." },
    { date: "Nov 2024 – Apr 2025", title: "UI Designer Intern", text: "Ogma IT Conceptions Pvt. Ltd." },
    { date: "May 2025 – Present", title: "UI & Backend Developer", text: "Topsia Website Designs" },
    { date: "2022 – Present", title: "B.Com Student", text: "Naba Ballygunge Mahavidyalaya, 3rd year." },
  ],

  skills: [
    { group: "Frontend", items: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Joi", "Multer", "Nodemailer", "bcrypt.js"] },
    { group: "Database & Tools", items: ["MongoDB", "Mongoose", "Aggregation", "Cloudinary", "Git & GitHub", "Helmet"] },
    { group: "CMS & Design", items: ["WordPress", "Figma", "Photoshop", "UI/UX Design", "Responsive Design"] },
  ],

  projects: [
    {
      title: "ProConnect",
      subtitle: "Job Portal & Professional Networking Platform",
      date: "Sep – Oct 2026",
      description:
        "LinkedIn-style networking platform with a job portal. About 100 REST endpoints over 14 MongoDB collections, JWT access and refresh tokens, role-based access, job lifecycle, applications with audit trail, social feed, messaging, notifications, interview scheduling and admin analytics.",
      tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      link: "https://github.com/rehanmdmoin-dev/Final-Project-Proconnect.git",
    },
    {
      title: "RBAC Assignment Management",
      subtitle: "Production-style REST API",
      date: "Sep 2026",
      description:
        "Full role-based access control for Admin, Manager and Employee with an enforced permission matrix. Layered architecture, JWT access and refresh tokens, Joi validation, Cloudinary attachments, a complete assignment-history audit trail and role-scoped dashboards.",
      tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Joi", "Multer", "Helmet"],
      link: "https://github.com/rehanmdmoin-dev/RBAC-Project.git",
    },
    {
      title: "Blog Management System",
      subtitle: "Blog Management & Publishing Platform",
      date: "Aug 2026",
      description:
        "Full-stack MERN blogging platform. Authors create, draft and publish posts, readers search, like and comment, and admins manage users, categories and tags. Includes JWT auth, SEO-friendly slugs, image uploads and MongoDB aggregation analytics.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "https://github.com/rehanmdmoin-dev/Mern-Stack-Blog-Project.git",
    },
    {
      title: "MyStore",
      subtitle: "E-commerce Product Management Platform",
      date: "Jul 2026",
      description:
        "Next.js dashboard with an Express API. Email OTP registration, login, profile and password management, product browsing and filtering, and image-upload CRUD where changes are restricted to the product's creator.",
      tech: ["Next.js", "Redux Toolkit", "Node.js", "MongoDB", "JWT", "Multer", "Nodemailer"],
      link: "https://github.com/rehanmdmoin-dev/My-Stores-FullStack.git",
    },
    {
      title: "Secure Product Management",
      subtitle: "Authenticated MERN CRUD Application",
      date: "Jul 2026",
      description:
        "Secure full-stack system where authenticated users manage their own products. JWT authentication, email verification, password recovery, Joi validation, Cloudinary uploads, search, filtering, sorting and ownership-based authorization.",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "bcrypt", "Joi", "Cloudinary"],
      link: "https://github.com/rehanmdmoin-dev/My-Stores-FullStack.git",
    },
    {
      title: "Weather App",
      subtitle: "Weather Information & Forecasting System",
      date: "Aug 2025",
      description:
        "React.js weather application with worldwide location search, temperature, humidity, pressure, sunrise and sunset, weather conditions, a 5-day forecast, dynamic UI rendering and a responsive layout.",
      tech: ["React.js", "Weather API", "CSS"],
      link: "https://github.com/rehanmdmoin-dev/Weather-API.git",
    },
  ],

  experience: [
    {
      title: "UI Designer – Intern",
      place: "Ogma IT Conceptions Pvt. Ltd.",
      date: "Nov 2024 – Apr 2025",
      text: "During this period, he was found hard working, consistent, honest and diligent in his assigned duties and responsibilities.",
    },
    {
      title: "UI & Backend Developer",
      place: "Topsia Website Designs",
      date: "May 2025 – Present",
      text: "Responsible for designing and developing user interfaces and backend systems for various web applications.",
    },
  ],

  education: [
    { title: "B.Com (3rd year)", place: "Naba Ballygunge Mahavidyalaya", date: "Apr 2022 – Present" },
  ],

  certifications: [
    { title: "MERN Stack Development", place: "Web Skitters Academy" },
    { title: "Web Designing", place: "Ejob India", link: "https://github.com/rehanmdmoin-dev/Ejob-India-Certificate.git" },
    { title: "WordPress (2 months)", place: "WsCubeTech", link: "https://github.com/rehanmdmoin-dev/WordPress-Certificate.git" },
  ],
};
