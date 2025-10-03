import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sweety",
  initials: "S",
  url: "https://www.google.com",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "I am Eager  to learn new technologies and i am MERN stack developer.",
  summary:
    "I am Sweety, a passionate MERN stack developer with a keen interest in learning new technologies.",
  avatarUrl: "/me.jpg",
  skills: [
    "SQL",
    "NoSQL",
    "React.js",
    "API testing",
    "Python",
    "JavaScript",
    "Java",
   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sweetymehto2021@gmail.com",
    tel: "+91XXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sweety-2024",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sweety-kumari-46217034b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sweetymehto2021@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "auscryptto",
      href: "https://www.auscryptto.com/",
      location: "Australia, Remote",
      title: "Junior Software Trainee",
      logoUrl: "https://www.auscryptto.com/images/INFINITY1-1844x933-2.png", // Placeholder for logo URL
      start: "09/2025",
      end: "Present",
      description: "Utilize MERN stack to develop and maintain web applications. Collaborate with cross-functional teams to deliver high-quality software solutions.",
      badges: [] // Placeholder for any badges or recognitions
    },
  
   

  ],
  education: [
    {
      school: "Rajdhani College",
      href: "https://rajdhanicollege.ac.in/", // Adjust the URL if needed
      degree: "CSE", // Specify the degree if applicable or just keep 'CSE' if that's the complete title
      logoUrl: "https://rajdhanicollege.ac.in/public/img/rajdhani-college-logo.svg", // Placeholder for the school logo
      start: "2022",
      end: "2025", // Adjust if you have a specific end date
    },
    {
      school: "Central Board Secondary",
      href: "https://cbse.edu", // Generic URL; replace with specific school URL if available
      degree: "Higher Secondary Education", // Or specify the level of study if different
      logoUrl: "https://www.cbse.gov.in/images//logo.png", // Placeholder for the school logo
      start: "2020",
      end: "2021",
    },
    {
      school: "Central Board Secondary",
      href: "https://cbse.edu", // Generic URL; replace with specific school URL if available
      degree: "Secondary Education", // Or specify the level of study if different
      logoUrl: "https://www.cbse.gov.in/images//logo.png", // Placeholder for the school logo
      start: "2018",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "Portfolio Website - Sweety",
      href: "https://github.com/YourGitHub/PortfolioWebsite", // Adjust with the actual project URL if available
      dates: "2024 - Present", // Specify the actual timeline
      active: true, // Set to false if the project is completed
      description:
        "A personal portfolio website showcasing my projects, skills, and experience as a MERN stack developer.",
      technologies: [
        "React.js",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Vercel"
      ],
      badges: [
        // Add any relevant badges or recognitions here
      ],
      links: [
        // {
        //   type: "Source",
        //   href: "",
        //   icon: <Icons.github className="size-3" />,
        // },
        {
          type: "Demo",
          href: "/", // Placeholder for the demo link if available
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/project.png", // Placeholder for project image if available
      video: "" // Placeholder for project video if available
    },


    
    
  ],
  hackathons: [
    {
      title: "Hacktoberfest Participation",
      dates: "October 2025",
      location: "Global",
      description:
        "Participated in Hacktoberfest 2025, contributing to open source projects and engaging with the developer community to enhance coding skills and collaboration.",
      image: "",  // If you have any relevant images, such as digital badges or photos from the event, link them here.
      mlh: "",  // If there is any affiliation with Major League Hacking for these events, include the badge link here.
      links: [
        {
          title: "Hacktoberfest",
          href: "https://hacktoberfest.digitalocean.com",
          icon: <Icons.globe className="size-3" />
        }
      ],
    },
    
  ],
} as const;
