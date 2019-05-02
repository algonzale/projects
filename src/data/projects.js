const projects = [
  {
    name: 'Project-Blue',
    description: 'Social Media/Advertising Webapp that shows you what you love!',
    key: 0,
    id: 0,
    link: null,
    images: [
      './assets/images/pb_t0.PNG',
      './assets/images/pb_t1.PNG',          
      './assets/images/pb_t2.PNG',
      './assets/images/pb_t3.PNG',
    ],
    explanation: "Made in collaboration with a friend. This webapp uses php, JavaScript" +
    " and effective CSS to make this website feel and look like any native app you can think " +
    "of. The app allows users to select their interests and then it matches users based on " +
    "these interest.",
    githubPage: 'https://github.com/kholland4/project-blue',
    status: 'In Dev',
    technologies: [
      {
        name: "JavaScript",
        image: "./assets/images/technologies/js.jpg"
      },
      {
        name: "HTML5",
        image: "./assets/images/technologies/html5.png"
      },
      {
        name: "CSS",
        image: "./assets/images/technologies/css.png"
      },
      {
        name: "PHP",
        image: "./assets/images/technologies/php.png"
      },
    ],
  },  
  {
    name: 'Savings Calculator React',
    description: 'A savings calculator made with React.js, and Node.js',
    key: 1,
    id: 1,
    link: 'scalcreact',
    images: [
    './assets/images/scr_t0.PNG'
    ],
    explanation: "This website, made with React.js, allows users to add their savings subaccounts and " + 
    "and calculate how much money in dollars will go to each subaccount based on a total.",
    githubPage: 'https://github.com/algonzale/scalcreact',
    status: 'In Dev',
    technologies: [
      {
        name: "JavaScript",
        image: "./assets/images/technologies/js.jpg"
      },
      {
        name: "HTML5",
        image: "./assets/images/technologies/html5.png"
      },
      {
        name: "CSS",
        image: "./assets/images/technologies/css.png"
      },
      {
        name: "React.js",
        image: "./assets/images/technologies/react.png"
      },
    ],
  },
  {
    name: 'Robo Friends',
    description: 'A robot friend finding app made with React.js',
    key: 2,
    id: 2,
    link: null,
    images: [
      './assets/images/rf_t0.PNG',
    ],
    explanation: "This website, made with React.js, it's just a practice website that helped me" + 
    "learn how to do searches in React. It displays the robots in the page based on what the user inputs.",
    githubPage: 'https://github.com/algonzale/robofriends',
    status: 'Completed',
    technologies: [
      {
        name: "JavaScript",
        image: "./assets/images/technologies/js.jpg"
      },
      {
        name: "HTML5",
        image: "./assets/images/technologies/html5.png"
      },
      {
        name: "CSS",
        image: "./assets/images/technologies/css.png"
      },
      {
        name: "React.js",
        image: "./assets/images/technologies/react.png"
      },
    ],
  },
  {
    name: 'Face Recognition App',
    description: 'A face recognition app made with React.js, and Express.js',
    key: 3,
    id: 3,
    link: null,
    images: [
      './assets/images/fr_t0.PNG',
    ],
    explanation: "This website allows users to login, register and submit photos. The website will then detect all the " + 
    "picture and render a blue box around them. This app uses React.js, Node.js, express.js and knex.js",
    githubPage: 'https://github.com/algonzale/facerecognition',
    status: 'In Dev',
    technologies: [
      {
        name: "JavaScript",
        image: "./assets/images/technologies/js.jpg"
      },
      {
        name: "HTML5",
        image: "./assets/images/technologies/html5.png"
      },
      {
        name: "CSS",
        image: "./assets/images/technologies/css.png"
      },
      {
        name: "React.js",
        image: "./assets/images/technologies/react.png"
      },
      {
        name: "Node.js",
        image: "./assets/images/technologies/node.png"
      },
      {
        name: "express.js",
        image: "./assets/images/technologies/express.png"
      },
      {
        name: "knex.js",
        image: "./assets/images/technologies/knex.png"
      },
    ],
  },
  {
    name: 'Fahrenheit 451 Game',
    description: 'A space invaders inspired game I made for my english class using p5.js',
    key: 4,
    id: 4,
    link: '451game',
    images: [
      './assets/images/fg_t0.PNG',
    ],
    explanation: "This is a game I made for my english class. It is based on the popular game Space Invaders and " +
    "has a fahrenheit 451 theme(thats the book I read for class). It uses the p5.js framework to make working with " + 
    "canvases easier.",
    githubPage: 'https://github.com/algonzale/451game',
    status: 'Completed',
    technologies: [
      {
        name: "JavaScript",
        image: "./assets/images/technologies/js.jpg"
      },
      {
        name: "HTML5",
        image: "./assets/images/technologies/html5.png"
      },
      {
        name: "CSS",
        image: "./assets/images/technologies/css.png"
      },
      {
        name: "p5.js",
        image: "./assets/images/technologies/p5.png"
      },
    ],
  },
]

export default projects;