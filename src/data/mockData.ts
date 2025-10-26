import type { IComponentDetailsData, IMainPageData } from "../types/types";

export const mainPageMockData: IMainPageData = {
  contents: [
    {
      id: 981653,
      name: "Advanced JavaScript Development",
      subtitle: "Continue with learning path",
      type: "LEARNING_PATH",
      image: "/assets/images/mock-image-1.jpg",
      progress: 45
    },
    {
      id: 34324,
      name: "Introduction to React Hooks",
      subtitle: "From 01.11.2024 to 30.12.2024",
      type: "COURSE",
      image: "/assets/images/mock-image-2.jpg",
      progress: 78
    },
    {
      id: 567892,
      name: "TypeScript Best Practices",
      subtitle: "From 15.10.2024 to 15.01.2025",
      type: "COURSE",
      image: "/assets/images/mock-image-3.jpg",
      progress: 23
    },
    {
      id: 782341,
      name: "Full Stack Web Development",
      subtitle: "Continue with learning path",
      type: "LEARNING_PATH",
      image: "/assets/images/mock-image-4.jpg",
      progress: 12
    },
    {
      id: 445678,
      name: "CSS Grid and Flexbox Mastery",
      subtitle: "From 20.09.2024 to 20.11.2024",
      type: "COURSE",
      image: "/assets/images/mock-image-5.jpg",
      progress: 92
    },
    {
      id: 923456,
      name: "Agile Project Management",
      subtitle: "Continue with learning path",
      type: "LEARNING_PATH",
      image: "/assets/images/mock-image-1.jpg",
      progress: 0
    },
    {
      id: 156789,
      name: "Introduction to Git and Version Control",
      subtitle: "From 05.11.2024 to 05.12.2024",
      type: "COURSE",
      image: "/assets/images/mock-image-2.jpg",
      progress: 56
    },
    {
      id: 334521,
      name: "Web Accessibility Standards (WCAG 2.1)",
      subtitle: "From 10.10.2024 to 10.01.2025",
      type: "COURSE",
      image: "/assets/images/mock-image-3.jpg",
      progress: 34
    },
    {
      id: 889234,
      name: "UI/UX Design Fundamentals",
      subtitle: "Video series - 12 episodes",
      type: "MEDIA",
      image: "/assets/images/mock-image-4.jpg",
      progress: 67
    },
    {
      id: 667123,
      name: "RESTful API Development",
      subtitle: "From 01.12.2024 to 28.02.2025",
      type: "COURSE",
      image: "/assets/images/mock-image-5.jpg",
      progress: 8
    }
  ],
  count: 10
};

export const componentDetailsMockData: Record<number, IComponentDetailsData> = {
  981653: {
    name: "Advanced JavaScript Development",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "John Smith"
      },
      {
        name: "Provider",
        content: "Tech Academy"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Development Department"
      },
      {
        name: "Description",
        content: "Master advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features. This comprehensive learning path will take you from intermediate to advanced level."
      }
    ],
    language: "en-US",
    startDate: "01.09.2024 09:00 (GMT+02:00)",
    endDate: "31.12.2025 18:00 (GMT+02:00)",
    learningForm: "Learning Path",
    image: "/assets/images/mock-image-1.jpg"
  },
  34324: {
    name: "Introduction to React Hooks",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Sarah Johnson"
      },
      {
        name: "Provider",
        content: "Frontend Masters"
      },
      {
        name: "Enrollment Type",
        content: "Manager approval required"
      },
      {
        name: "Cost centre",
        content: "Frontend Development"
      },
      {
        name: "Description",
        content: "Learn how to use React Hooks to manage state and side effects in functional components. Covers useState, useEffect, useContext, and custom hooks with practical examples."
      }
    ],
    language: "en-GB",
    startDate: "01.11.2024 08:00 (GMT+01:00)",
    endDate: "30.12.2024 17:00 (GMT+01:00)",
    learningForm: "Course",
    image: "/assets/images/mock-image-2.jpg"
  },
  567892: {
    name: "TypeScript Best Practices",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Michael Chen"
      },
      {
        name: "Provider",
        content: "Code Quality Institute"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Quality Assurance"
      },
      {
        name: "Description",
        content: "Dive deep into TypeScript best practices, type safety, generics, and advanced type features. Learn how to write maintainable and scalable TypeScript code."
      }
    ],
    language: "en-US",
    startDate: "15.10.2024 10:00 (GMT+02:00)",
    endDate: "15.01.2025 16:00 (GMT+02:00)",
    learningForm: "Course",
    image: "/assets/images/mock-image-3.jpg"
  },
  782341: {
    name: "Full Stack Web Development",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Emily Rodriguez"
      },
      {
        name: "Provider",
        content: "Full Stack Academy"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Development Department"
      },
      {
        name: "Description",
        content: "Complete learning path covering frontend, backend, databases, and deployment. Build real-world applications using modern technologies and best practices."
      }
    ],
    language: "en-GB",
    startDate: "01.08.2024 09:00 (GMT+02:00)",
    endDate: "30.06.2025 18:00 (GMT+02:00)",
    learningForm: "Learning Path",
    image: "/assets/images/mock-image-4.jpg"
  },
  445678: {
    name: "CSS Grid and Flexbox Mastery",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "David Park"
      },
      {
        name: "Provider",
        content: "CSS Layout Pro"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Frontend Development"
      },
      {
        name: "Description",
        content: "Master modern CSS layout techniques with Grid and Flexbox. Create responsive, accessible layouts for any device with hands-on projects and exercises."
      }
    ],
    language: "en-US",
    startDate: "20.09.2024 08:30 (GMT+02:00)",
    endDate: "20.11.2024 17:30 (GMT+02:00)",
    learningForm: "Course",
    image: "/assets/images/mock-image-5.jpg"
  },
  923456: {
    name: "Agile Project Management",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Lisa Anderson"
      },
      {
        name: "Provider",
        content: "Agile Institute"
      },
      {
        name: "Enrollment Type",
        content: "Manager approval required"
      },
      {
        name: "Cost centre",
        content: "Project Management Office"
      },
      {
        name: "Description",
        content: "Learn Agile methodologies including Scrum and Kanban. Understand sprint planning, daily standups, retrospectives, and how to lead agile teams effectively."
      }
    ],
    language: "en-GB",
    startDate: "01.10.2024 09:00 (GMT+02:00)",
    endDate: "31.03.2025 18:00 (GMT+02:00)",
    learningForm: "Learning Path",
    image: "/assets/images/mock-image-1.jpg"
  },
  156789: {
    name: "Introduction to Git and Version Control",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Kevin Wu"
      },
      {
        name: "Provider",
        content: "DevOps Academy"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Development Department"
      },
      {
        name: "Description",
        content: "Master Git version control system from basics to advanced workflows. Learn branching, merging, rebasing, and collaboration strategies for team development."
      }
    ],
    language: "en-US",
    startDate: "05.11.2024 10:00 (GMT+01:00)",
    endDate: "05.12.2024 16:00 (GMT+01:00)",
    learningForm: "Course",
    image: "/assets/images/mock-image-2.jpg"
  },
  334521: {
    name: "Web Accessibility Standards (WCAG 2.1)",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Rachel Green"
      },
      {
        name: "Provider",
        content: "Accessibility First"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Quality Assurance"
      },
      {
        name: "Description",
        content: "Comprehensive course on web accessibility following WCAG 2.1 guidelines. Learn to create inclusive web applications that work for all users including those with disabilities."
      }
    ],
    language: "en-GB",
    startDate: "10.10.2024 09:30 (GMT+02:00)",
    endDate: "10.01.2025 17:30 (GMT+02:00)",
    learningForm: "Course",
    image: "/assets/images/mock-image-3.jpg"
  },
  889234: {
    name: "UI/UX Design Fundamentals",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "No Administrator has been selected yet"
      },
      {
        name: "Provider",
        content: "Design Academy"
      },
      {
        name: "Enrollment Type",
        content: "Self-enrollment"
      },
      {
        name: "Cost centre",
        content: "Design Department"
      },
      {
        name: "Description",
        content: "Video series covering essential UI/UX design principles, user research, wireframing, prototyping, and usability testing. Includes 12 episodes with practical exercises."
      }
    ],
    language: "en-US",
    startDate: "01.09.2024 00:00 (GMT+02:00)",
    endDate: "31.12.2025 23:59 (GMT+02:00)",
    learningForm: "Media",
    image: "/assets/images/mock-image-4.jpg"
  },
  667123: {
    name: "RESTful API Development",
    description_data: [
      {
        name: "Planning status",
        content: "Released"
      },
      {
        name: "Administrator",
        content: "Thomas Miller"
      },
      {
        name: "Provider",
        content: "Backend Masters"
      },
      {
        name: "Enrollment Type",
        content: "Manager approval required"
      },
      {
        name: "Cost centre",
        content: "Backend Development"
      },
      {
        name: "Description",
        content: "Learn to design and build RESTful APIs following industry best practices. Covers HTTP methods, status codes, authentication, versioning, and API documentation."
      }
    ],
    language: "en-GB",
    startDate: "01.12.2024 08:00 (GMT+01:00)",
    endDate: "28.02.2025 18:00 (GMT+01:00)",
    learningForm: "Course",
    image: "/assets/images/mock-image-5.jpg"
  }
};