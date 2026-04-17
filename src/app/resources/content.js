const person = {
  firstName: "Alex",
  lastName: "Trotta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Software Engineer & Cybersecurity Specialist",
  avatar: "/images/avatar.jpg",
  location: "Europe/Brussels", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Spanish", "Italian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false, // set to false to hide the newsletter form
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Trottatigno",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alextrotta/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:trotta.alexandre.pro@gmail.com",
  },
  {
    name: "CV",
    icon: "document",
    link: "/CV/CV-ALEXANDRE-TROTTA.pdf",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Engineer, Security-Specialized</>,
  subline: (
    <>
      Hi, I am Alex. I build scalable web and mobile products with a strong
      focus on secure architecture, data protection, and reliable delivery from
      design to deployment.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3HMA5tSxN6SnMiuSrriNOsxd1BBiuyGmlybe2c1YLjwgKesVSI7qX_LxQd89HNq5IgUbNLQlTU",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Belgium-based Full-Stack Software Engineer with a security
        specialization. Over 6+ years, I have delivered web and mobile products
        by combining scalable architecture, secure application design, and
        end-to-end ownership from product requirements to production deployment.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Onlyne",
        timeframe: "Nov 2024 - Present",
        role: "Tech Lead - Full-Stack Developer",
        achievements: [
          <>
            Led technical strategy for a document-centric ERP, defining the
            architecture and guiding delivery across web and mobile surfaces.
          </>,
          <>
            Built secure file management workflows with versioning, granular
            RBAC permissions, and real-time collaboration features, while
            improving team review velocity through mentoring.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Project 1",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Independent Consultant",
        timeframe: "Jun 2022 - Oct 2024",
        role: "Full-Stack & Cybersecurity Consultant",
        achievements: [
          <>
            Delivered full-stack web and mobile solutions for startups and SMEs,
            translating business constraints into reliable and maintainable
            systems.
          </>,
          <>
            Performed security audits across 8 SMEs and contributed to the
            remediation of 25+ critical vulnerabilities, including SQL injection
            and XSS exposure.
          </>,
        ],
        images: [],
      },
      {
        company: "Timber Tailor",
        timeframe: "Mar 2020 - Jun 2022",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Developed and deployed a construction tracking web application used
            daily by operations teams, replacing paper-driven workflows.
          </>,
          <>
            Built custom CRM and internal collaboration tools to improve client
            follow-up and communication between teams.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance / Student Entrepreneur",
        timeframe: "Feb 2017 - Mar 2020",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Built and launched business websites and custom applications for
            small companies using JavaScript, PHP, and Python.
          </>,
          <>
            Applied secure-by-default practices, including SSL setup and OWASP
            hardening fundamentals, to protect client data and support GDPR
            expectations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & Mobile",
        description: (
          <>
            TypeScript, React, Next.js, and React Native for responsive and
            maintainable product interfaces.
          </>
        ),
        images: [],
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Node.js, Express, Python, FastAPI, and Django for secure and
            scalable backend services.
          </>
        ),
        images: [],
      },
      {
        title: "Data & Cloud",
        description: (
          <>
            PostgreSQL, Supabase, SQLite, MongoDB, and cloud integrations with
            AWS S3 and Azure.
          </>
        ),
        images: [],
      },
      {
        title: "Security & DevOps",
        description: (
          <>
            RBAC, secure API design, OWASP-oriented hardening, SonarQube, Snyk,
            Burp Suite, Nmap, Docker, Linux, CI/CD, GitHub Actions, and
            Kubernetes.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
