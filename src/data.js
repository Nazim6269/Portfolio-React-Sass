export const skillsData = [
  {
    id: 1,
    name: 'ReactJS',
    status: 'Completed',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    icon: 'assets/twitter.png',
  },
  {
    id: 2,
    name: 'NextJS',
    status: 'Running...',
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg',
    icon: 'assets/youtube.png',

    featured: true,
  },
  {
    id: 3,
    name: 'Javascript',
    status: 'Completed',
    img: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png',
    icon: 'assets/linkedin.png',
  },
  {
    id: 4,
    name: 'MaterialUI',
    status: 'Completed',
    img: 'https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png',
    icon: 'assets/linkedin.png',
  },
  {
    id: 5,
    name: 'Styled Components',
    status: 'Completed',
    img: 'https://www.daggala.com/static/228867c3668e439101821568a8a03b54/ec333/sc.png',
    icon: 'assets/linkedin.png',
  },
  {
    id: 6,
    name: 'Framer Motion',
    status: 'Completed',
    img: 'https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion.webp',
    icon: 'assets/linkedin.png',
  },
  {
    id: 7,
    name: 'TailwindCSS',
    status: 'Completed',
    img: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png',
    icon: 'assets/linkedin.png',
  },
  {
    id: 8,
    name: 'Atomic CSS',
    status: 'Completed',
    img: 'https://sebastienlorber.com/static/80100b6831efdf60fa68f366b41413a6/6050d/hero.png',
    icon: 'assets/linkedin.png',
  },
  {
    id: 9,
    name: 'Design Patterns',
    status: 'Running',
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*foVnq6ka4jPqrOzWWhq1kA.png',
    icon: 'assets/linkedin.png',
  },

  {
    id: 10,
    name: 'HTML',
    status: 'Completed',
    img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256',
    icon: 'assets/linkedin.png',
  },
  {
    id: 11,
    name: 'Redux',
    status: 'Completed',
    img: 'https://w7.pngwing.com/pngs/273/105/png-transparent-redux-original-logo-icon.png',
    icon: 'assets/linkedin.png',
  },
  {
    id: 12,
    name: 'Git',
    status: 'Completed',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png',
    icon: 'assets/linkedin.png',
  },
];

export const navArray = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/projects', name: 'Projects' },
  { id: 3, path: '/about', name: 'About' },
  { id: 4, path: '/skills', name: 'Skills' },
  { id: 5, path: '/contact', name: 'Contact' },
];

export const projectsData = [
  {
    id: 1,
    category: 'NextJS',
    data: [
      {
        id: 1,
        title: 'Twitter Social',
        description:
          'In this project i try to implement various functionality through, react, node.js, mongoDB and express.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        screenshots: [
          '/projectImages/dreams-food/expense-tracker.png',
          '/projectImages/dreams-food/expense-tracker.png',
        ],
        demoLink: 'https://example.com/demo',
        githubLink: 'https://github.com/Nazim6269/Dreams_Food-MERN',
      },
      {
        id: 2,
        title: 'NextJS Blog',
        description:
          'In this project i try to implement various functionality through, react, node.js, mongoDB and express.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        screenshots: [
          '/projectImages/dreams-food/expense-tracker.png',
          '/projectImages/dreams-food/expense-tracker.png',
        ],
        demoLink: 'https://example.com/demo',
        githubLink: 'https://github.com/Nazim6269/Dreams_Food-MERN',
      },
    ],
  },
  {
    id: 2,
    category: 'ReactJS',
    data: [
      {
        id: 1,
        title: 'Expense Tracker',
        description:
          'In this project i try to implement various functionality through, react, ',
        features: ['You can add our cost', 'Delete your cost'],
        technologies: ['React', 'Express', 'MongoDB'],
        screenshots: [
          '/projectImages/expenseTracker/expense-tracker.png',
          '/projectImages/expenseTracker/expense-tracker.png',
        ],
        demoLink: 'https://context-api-expensetracker6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/Expense_Tracker_Context_Api',
      },
      {
        id: 2,
        title: 'Travel App',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/travel-app/travelAppSS1.png',
          '/projectImages/travel-app/travelAppSS2.png',
          '/projectImages/travel-app/travelAppSS3.png',
        ],
        demoLink: 'https://travel-app-woad-xi.vercel.app/',
        githubLink: 'https://github.com/Nazim6269/Travel_App',
      },
      {
        id: 3,
        title: 'Counter App Two',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/counter-react-redux/react-reduxSS.png',
          '/projectImages/counter-react-redux/react-reduxSS.png',
        ],
        demoLink: 'https://react-redux6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/Counter_App_React-Redux',
      },
      {
        id: 4,
        title: 'Country App',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/countryApp/countryAppSS1.png',
          '/projectImages/countryApp/countryAppSS1.png',
        ],
        demoLink: 'https://responsive-countryapp6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/Country_App-React-',
      },
      {
        id: 5,
        title: 'Search Image',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: ['/projectImages/imageSearch/imageSearchSS.png'],

        demoLink: 'https://searchingimg6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/Country_App-React-',
      },
      {
        id: 6,
        title: 'Tuatara',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/tuatara/tuataraSS1.png',
          '/projectImages/tuatara/tuataraSS2.png',
          '/projectImages/tuatara/tuataraSS3.png',
        ],

        demoLink: 'https://responsivetutara6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/TuataraApp-ReactJs',
      },
      {
        id: 7,
        title: 'Counter App One',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/counterAppOne/counterAppSS.png',
          '/projectImages/counterAppOne/counterAppSS.png',
        ],
        demoLink: 'https://react-redux6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/Counter_App_React-Redux',
      },
      {
        id: 8,
        title: 'React Blog App',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/counterAppOne/counterAppSS.png',
          '/projectImages/counterAppOne/counterAppSS.png',
        ],
        demoLink: 'https://react-redux6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/Blog_App',
      },
      {
        id: 9,
        title: 'YouTube Project',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/counterAppOne/counterAppSS.png',
          '/projectImages/counterAppOne/counterAppSS.png',
        ],
        demoLink: 'https://react-redux6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/YouTube_Project',
      },
      {
        id: 10,
        title: 'Track Zone',
        description:
          'In this project i try to implement various functionality through, react, ',
        technologies: ['React', 'SCSS', 'Aos'],
        screenshots: [
          '/projectImages/counterAppOne/counterAppSS.png',
          '/projectImages/counterAppOne/counterAppSS.png',
        ],
        demoLink: 'https://react-redux6269.netlify.app/',
        githubLink: 'https://github.com/Nazim6269/YouTube_Project',
      },
    ],
  },
  {
    id: 3,
    category: 'HTML-CSS',
    data: [
      {
        id: 1,
        title: 'HTML-CSS-Portfolio',
        description: 'lorem',
        technologies: ['html', 'css', 'JS'],
        screenshots: [
          '/projectImages/html-css-portfolio/portfolioSS1.png',
          '/projectImages/html-css-portfolio/portfolioSS1.png',
        ],
        demoLink: 'https://portfolio-html-css-js-orpin.vercel.app/',
        githubLink:
          'https://github.com/Nazim6269/Portfolio_HTML_CSS_JS-Responsive-',
      },
      {
        id: 2,
        title: 'Bloom HTML-CSS',
        description: 'lorem',
        technologies: ['html', 'css'],
        screenshots: [
          '/projectImages/bloom/bloomSS1.png',
          '/projectImages/bloom/bloomSS2.png',
        ],
        demoLink: 'https://bloom-html-css.vercel.app/',
        githubLink:
          'https://github.com/Nazim6269/Portfolio_HTML_CSS_JS-Responsive-',
      },
      {
        id: 3,
        title: 'Slick Template',
        description: 'lorem',
        technologies: ['html', 'css'],
        screenshots: [
          '/projectImages/slickTemplate/travel-appSS1.png',
          '/projectImages/slickTemplate/travel-appSS2.png',
          '/projectImages/slickTemplate/travel-appSS3.png',
          '/projectImages/slickTemplate/travel-appSS4.png',
        ],
        demoLink: 'https://slick-html-css.vercel.app/',
        githubLink:
          'https://github.com/Nazim6269/Portfolio_HTML_CSS_JS-Responsive-',
      },
      {
        id: 4,
        title: 'Bcrypto Template',
        description: 'lorem',
        technologies: ['html', 'css'],
        screenshots: [
          '/projectImages/bCrypto/bcryptoSS1.png',
          '/projectImages/bCrypto/bcryptoSS2.png',
          '/projectImages/bCrypto/bcryptoSS3.png',
        ],
        demoLink: 'https://bcrypto-html-css.vercel.app/',
        githubLink:
          'https://github.com/Nazim6269/Portfolio_HTML_CSS_JS-Responsive-',
      },
      {
        id: 5,
        title: 'W3Codebs',
        description: 'lorem',
        technologies: ['html', 'css'],
        screenshots: [
          '/projectImages/w3codebs/w3codebsSS1.png',
          '/projectImages/w3codebs/w3codebsSS2.png',
          '/projectImages/w3codebs/w3codebsSS3.png',
        ],
        demoLink: 'https://w3codevs-html-css.vercel.app/',
        githubLink: 'https://github.com/Nazim6269/w3codevs-html-css',
      },
      {
        id: 6,
        title: 'Unifinder',
        description: 'lorem',
        technologies: ['html', 'css'],
        screenshots: ['/projectImages/unifinder/unifinderSS1.png'],
        demoLink: 'https://unifinder-html-css.vercel.app/',
        githubLink: 'https://github.com/Nazim6269/unifinder-html-css',
      },
    ],
  },
  {
    id: 4,
    category: 'Random',
    data: [
      {
        id: 1,
        title: 'Animated Digital Clock',
        description: 'lorem',
        technologies: ['html', 'css', 'JS'],
        screenshots: ['/projectImages/animatedClock/animatedClock.png'],
        demoLink: 'https://animated-digital-clock.vercel.app/',
        githubLink: 'https://github.com/Nazim6269/animatedDigitalClock',
      },
      {
        id: 2,
        title: 'Digital Clock',
        description: 'lorem',
        technologies: ['html', 'css', 'JS'],
        screenshots: [
          '/projectImages/html-css-portfolio/portfolioSS1.png',
          '/projectImages/html-css-portfolio/portfolioSS1.png',
        ],

        demoLink: 'https://digital-clock-xi-sepia.vercel.app/',
        githubLink: 'https://github.com/Nazim6269/digitalClock',
      },
    ],
  },
  {
    id: 4,
    category: 'MERN',
    data: [
      {
        id: 1,
        title: "DREAM'S FOOD",
        description: 'lorem',
        technologies: ['html', 'css', 'JS'],
        screenshots: [
          '/projectImages/html-css-portfolio/portfolioSS1.png',
          '/projectImages/html-css-portfolio/portfolioSS1.png',
        ],
        demoLink: 'https://portfolio-html-css-js-orpin.vercel.app/',
        githubLink:
          'https://github.com/Nazim6269/Portfolio_HTML_CSS_JS-Responsive-',
      },
    ],
  },
  {
    id: 5,
    category: 'DOM',
    data: [
      {
        id: 1,
        title: 'Color Picker',
        description: 'lorem',
        technologies: ['html', 'css', 'JS'],
        screenshots: ['/projectImages/colorPicker/colorPicker.png'],
        demoLink: 'https://color-picker-tau-rosy.vercel.app/',
        githubLink: 'https://github.com/Nazim6269/colorPicker',
      },
    ],
  },
];
