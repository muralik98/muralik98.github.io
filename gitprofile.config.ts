// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'muralik98', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['muralik98/Credit-Card-Fraud-Detection', 'muralik98/multi-label-bank-complaint-classification', 'muralik98/insurance-fraud-detection', 'muralik98/Used-Car-Price-Prediction', 'muralik98/Customer-Churn-Prediction'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Murali K',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'muralik1598',
    youtube: 'RandomGradient', // example: 'pewdiepie'
    medium: 'muralik15',
    website: 'https://muralik98.github.io/',
    phone: '',
    email: 'muralik1598@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'TensorFlow',
    'PyTorch',
    'NLP',
    'Time Series',
    'Data Analysis',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'GenAI'

  ],
  experiences: [
    {
      company: 'Kotak Mahindra Bank',
      position: 'Business Analyst',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://www.kotak.com/en/home.html',
    }
  ],
  certifications: [
    {
      name: 'Data Science Masters-PW Skills',
      body: '',
      year: 'June 2024',
      link: 'https://cdn.pwskills.com/learn/certificates/be0ffa70-3b6a-4397-8ce9-589bb6fcd77f.pdf',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Technology-Bombay',
      degree: 'M.Sc Physics',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'University Visvesvaraya College of Engineering',
      degree: 'Bachelor of Engineering Mechanical,',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Exploring the efficacy of using various coolants on lithium-ion 18650 cell employing conjugate heat transfer simulation',
      conferenceName: '',
      journalName: 'Materials Today: Proceedings',
      authors: 'Murali.K, M.Sanjay Sharma, Adarsh Jaygopal',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S2214785319339070#preview-section-abstract',
      description:
        'Conjugate Heat Transfer simulation of Li-18650 cell. Studying different cooling property and finding optimal parameter which will give most efficient performance.',
    },
    {
      title: 'Mathematical Modeling for Cooling of Cylindrical Li-ion Batteries',
      journalName: 'International Research Journal of Engineering and Technology-IRJET',
      authors: 'Murali.K, M.Sanjay Sharma, Adarsh Jaygopal',
      link: 'https://www.irjet.net/archives/V6/i5/AIME-2019/AIME-08.pdf',
      description:
        'A simple heat generation model for Li-18650 cells.'
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'muralik15', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'black',
      'business',
      'night',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
