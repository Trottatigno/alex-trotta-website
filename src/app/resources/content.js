const person = {
  firstName: "Alex",
  lastName: "Trotta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Software Developer",
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
  headline: <>Fullstack Software Engineer</>,
  subline: (
    <>
      Hi, I’m Alex! 👋 I specialize in building scalable web and mobile
      applications with a focus on performance, user experience and clean code.
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
        I am Belgium-based senior software engineer with a passion for
        transforming complex challenges into simple and elegant solution. My
        work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Onlyne",
        timeframe: "2024 - Present",
        role: "Tech Lead - Fullstack Developer",
        achievements: [
          <>
            As a Senior Software Developer, I defined and led the application’s
            technical stack, designing its structure and architecture while
            managing a small internal development team to ensure scalability,
            performance, and seamless development.
          </>,
          <>
            I led the development of an ERP solution (web and mobile),
            coordinating a small internal team to build a secure platform
            managing file transfers from teams to clients, with seamless
            integrations into existing ERP systems.
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
        company: "Timber Tailor",
        timeframe: "2021 - 2022",
        role: "Fullstack Developer",
        achievements: [
          <>
            I developed an internal construction site tracking management
            program that enhances team communication and optimizes client
            follow-up, making processes more efficient and transparent.
          </>,
          <>
            I designed and implemented robust backend solutions using Node.js
            and Express.js, creating high-performance and secure APIs to ensure
            smooth data management and an optimal user experience.
          </>,
        ],
        images: [],
      },
      {
        company: "AT Consulting",
        timeframe: "2017 - 2024",
        role: "Consultant - Fullstack Developer",
        achievements: [
          <>
            I worked as a consultant for numerous companies, creating,
            maintaining, and developing custom software solutions tailored to
            their unique needs and challenges.
          </>,
          <>
            I delivered web development talks and gained hands-on experience in
            the startup ecosystem in Belgium, contributing to innovative
            projects and fostering growth in dynamic environments.
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
        title: "JavaScript",
        description: (
          <>
            Proficient in modern JavaScript (ES6+), writing clean, efficient,
            and maintainable code for dynamic web applications.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Python",
        description: (
          <>
            Strong experience with Python for backend development, scripting,
            and building robust, maintainable server-side applications.
          </>
        ),
        images: [],
      },
      {
        title: "ReactJs",
        description: (
          <>
            Experienced in building scalable and interactive UIs with React,
            using hooks, context, and state management libraries like Zustand.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "NextJs",
        description: (
          <>
            Skilled in leveraging Next.js for full-stack applications,
            optimizing performance with server-side rendering (SSR), static
            generation (SSG), and API routes.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "UI Design & Prototyping (Figma)",
        description: (
          <>
            Skilled in designing clean and intuitive user interfaces using
            Figma, creating design systems, wireframes, and developer-friendly
            prototypes.
          </>
        ),
        images: [],
      },
      {
        title: "NodeJs & ExpressJs",
        description: (
          <>
            Strong backend development skills using Node.js and Express.js to
            create RESTful APIs, authentication systems, and real-time
            applications.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Django & FastAPI",
        description: (
          <>
            Experienced in building scalable and secure backend services using
            Django and FastAPI, including REST APIs, authentication, and
            high-performance asynchronous endpoints.
          </>
        ),
        images: [],
      },
      {
        title: "SQL & NoSQL databases",
        description: (
          <>
            Experienced in database design and management, handling complex
            queries with PostgreSQL, Supabase, and NoSQL solutions like MongoDB.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Supabase",
        description: (
          <>
            Experienced in using Supabase for backend-as-a-service solutions,
            including authentication, real-time databases, storage, and
            PostgreSQL integrations.
          </>
        ),
        images: [],
      },
      {
        title: "PostgreSQL",
        description: (
          <>
            Strong expertise in PostgreSQL, including schema design, performance
            optimization, relational modeling, and complex SQL queries.
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
