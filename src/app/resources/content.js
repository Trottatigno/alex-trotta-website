const person = {
  firstName: "Alex",
  lastName: "Trotta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Software Engineer",
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
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack Software Engineer</>,
  subline: (
    <>
      Hi, I’m Alex! 👋 I specialize in building scalable web apps with React.js,
      React Native, Next.js, Node.js and have expertise in SQL/NoSQL databases,
      Python, and AI.
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
    display: true,
    link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3HMA5tSxN6SnMiuSrriNOsxd1BBiuyGmlybe2c1YLjwgKesVSI7qX_LxQd89HNq5IgUbNLQlTU",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Alex is a Belgium-based software engineer with a passion for
        transforming complex challenges into simple and elegant app. His work
        spans digital interfaces, interactive experiences, and the convergence
        of design and technology.
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
        role: "Senior Fullstack Engineer",
        achievements: [
          <>
            I established the technical stack for the application, defining its
            structure, architecture, and the solutions used to ensure
            scalability, performance, and seamless development.
          </>,
          <>
            I developed an ERP (web and mobile app) that manages file transfers
            from teams to clients, seamlessly integrating with ERP systems for
            efficient and secure data exchange.
          </>,
          <>
            I built online annotation features using Canvas API and HTML5, along
            with a video media player with annotations, editing capabilities,
            enhancing user interaction and content customization.
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
        company: "AT Consulting",
        timeframe: "2017 - 2024",
        role: "Fullstack software Engineer",
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
      {
        company: "Timber Tailor",
        timeframe: "2021 - 2022",
        role: "Software Engineer Technical Lead",
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
