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
        projects: ['muralik98/Credit-Card-Fraud-Detection', 'muralik98/multi-label-bank-complaint-classification', 'muralik98/insurance-fraud-detection', 'muralik98/Used-Car-Price-Prediction', 'muralik98/Customer-Churn-Prediction', 'muralik98/customer-ltv'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Bank Customer Complaint Classification' ,
          description:
            'A multi-label BERT classification model, to classify bank customer complaints into main category and sub-category so that complaints can be routed easily.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz32UKqeWehbntTWOc921r0BQz5Xa6d0e7keAJ8G4uYQ0RKOGDOCCd20WeQS_XGi16fo0&usqp=CAU',
          link: 'https://huggingface.co/spaces/muralik0115/Multi-Label-Bank-Complaint-Classification',
        },
        {
          title: 'Credit Card Fraud Detection',
          description:
            'A model to predict credit card fraud based on financial, demographic and location details.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFm5kJiIYsPQ9mH9bXQhhAKZ1Y8Z7a60Nzg&s',
          link: 'https://credit-card-fraud-detection-kmp2rdgvdhb2adavwjdmzp.streamlit.app',
        },
      ],
    },
  },
  seo: {
    title: 'Murali K',
    description: '-Page',
    imageURL: 'https://as1.ftcdn.net/v2/jpg/02/85/41/16/1000_F_285411627_jwVhIFmD4dzklBhv5Ayfa1IDlvKISv92.jpg',
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
      'https://raw.githubusercontent.com/muralik98/muralik98.github.io/7b8ec8bf7ca2f813a1b38fbfff61869a40c240b6/src/data/Murali_K_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      description:'Thermal stability is a crucial aspect of lithium cells. To build a cooling system for them, we developed a Conjugate Heat Transfer simulation of a Li-18650 cell. We studied various cooling properties and identified optimal parameters to achieve the most efficient performance.'    },
    {
      title: 'Mathematical Modeling for Cooling of Cylindrical Li-ion Batteries',
      journalName: 'International Research Journal of Engineering and Technology-IRJET',
      authors: 'Murali.K, M.Sanjay Sharma, Adarsh Jaygopal',
      link: 'https://www.irjet.net/archives/V6/i5/AIME-2019/AIME-08.pdf',
      description:'The heat generation process in lithium cells is complex due to intricate electrochemistry and external factors such as temperature. We developed a straightforward heat generation model for Li-18650 cells to better understand and manage this process.'
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
