export interface ResumeData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  education: {
    university: string;
    degree: string;
    location: string;
    graduation: string;
    gpa?: string;
  };
  experience: {
    company: string;
    role: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  leadership: {
    organization: string;
    role: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  skills: string[];
  certifications?: string[];
}

export const resumeData: ResumeData = {
  name: "Tyson Tucci",
  title: "Business Analytics & Information Management Student",
  location: "Normal, IL",
  phone: "309-531-2890",
  email: "tysont04@gmail.com",
  linkedin: "linkedin.com/in/tyson-tucci",
  education: {
    university: "Purdue University, Mitch Daniels School of Business",
    degree: "Bachelor of Science, Business Analytics and Information Management",
    location: "West Lafayette, IN",
    graduation: "May 2026"
  },
  experience: [
    {
      company: "Osborn Barr Paramore (OBP)",
      role: "Product Management Intern",
      location: "St. Louis, MO (Remote)",
      period: "May 2025 – August 2025",
      highlights: [
        "Built and deployed marketing email campaigns for Missouri Division of Tourism while performing QA testing to ensure accuracy and functionality",
        "Managed website maintenance tickets and coordinated task progress using Jira in a fast-paced agency environment",
        "Assisted with website and UX improvements for Santa’s Cottages in collaboration with development and creative teams",
        "Participated in A/B testing and utilized Google Analytics and MRI-Simmons data to support user behavior and marketing analysis",
        "Collaborated with fellow interns to develop a strategic marketing plan supporting Silver Dollar City’s 2026 expansion initiative",
        "Updated and maintained website content through CMS platforms while troubleshooting content and functionality issues"
      ]
    },
    {
      company: "Hjerpe & Tennison CPAS, LLC",
      role: "Staff Accountant Intern",
      location: "Bloomington, IL",
      period: "May 2023 – August 2024",
      highlights: [
        "Collaborated in staff and payroll meetings, contributing meaningful and impactful ideas",
        "Shadowed an experienced Staff Accountant weekly, gaining hands-on experience in accounting software and managing client relations",
        "Performed bookkeeping for multiple clients, ensuring accurate transaction categorization and reconciliations, while addressing client-specific needs",
        "Processed payroll, handling wage calculation, tax deductions, and timely distribution to guarantee employees received accurate compensation",
        "Entered new client information into tax filing software, facilitating the setup and organization of client data for streamlined tax preparation"
      ]
    }
  ],
  leadership: [
    {
      organization: "Purdue Swim Club",
      role: "President",
      location: "West Lafayette, IN",
      period: "November 2024 – January 2026",
      highlights: [
        "Led club of 150+ members, overseeing all operations, communications, and events to maintain smooth coordination and engagement",
        "Organized and scheduled swim meets with other universities, managing logistics, communication, and travel arrangements",
        "Arranged home meets with the Aquatics Center directors, ensuring scheduling, facility setup, and official assignments were taken care of",
        "Negotiated with the Aquatics Center directors to secure an additional free pool rental per year for home meets, saving approximately $3,000 per year",
        "Facilitate weekly officer board meetings by setting agendas, delegating responsibilities, and leading discussions to ensure all club responsibilities are met"
      ]
    }
  ],
  skills: [
    "Python",
    "SQL",
    "Google Analytics",
    "Tableau",
    "Minitab",
    "Jira",
    "API Integration",
    "LLM Application Development",
    "Figma",
    "Microsoft Office"
  ]
};
