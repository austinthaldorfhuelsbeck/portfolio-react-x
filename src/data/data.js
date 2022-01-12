
export const nav = [
  {
    nav_id: "2",
    title: "Portfolio",
    link: "portfolio",
    order: 1,
  },
  {
    nav_id: "3",
    title: "About",
    link: "about",
    order: 2,
  },
  {
    nav_id: "4",
    title: "Contact",
    link: "contact",
    order: 3,
  },
]

export const sections = [
  {
    section_id: 1,
    title: "hero",
    img_src:
      "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/austinthaldorfhuelsbeck.jpg",
    subtext: "Austin Thaldorf-Huelsbeck",
    header: "A Full-Stack Web Developer from Seattle",
    paragraph: "",
  },
  {
    title: "about",
    header: "Hello!",
    img_src:
      "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/austinthaldorfhuelsbeck-2.jpg",
    paragraph:
      "My name is Austin. Building, creating, and fine-tuning is where I feel at home. Whether it's solving a design challenge, or editing a feature film, I've always gravitated towards the problem-solving side of creative fields. Learning to code has brought that problem-solving, engineering-mindedness into full focus.",
  },
  {
    title: "contact",
    header: "Say Hello",
    paragraph:
      "I am currently available for full-time contracts, as well as web development work for personal projects. Reach out now to say hey!",
  },
]

export const projects = [
  {
    project_id: 1,
    url: "cathy-loerzel",
    title: "Cathy Loerzel",
    category: "Fullstack Web App",
    date: "Oct 2021",
    img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-cathy-loerzel-thumbnail.jpg",
    paragraph:
      "A full-stack solution for a public figure's homepage, including an admin dashboard to modify content.",
    link: "http://cathyloerzel.com",
    repo: "https://github.com/austinthaldorfhuelsbeck/cathy-loerzel-refresh",
    technologies: [
      {
        technology_id: 1,
        title: "JavaScript"
      },
      {
        technology_id: 2,
        title: "React"
      },
      {
        technology_id: 3,
        title: "Node"
      },
      {
        technology_id: 5,
        title: "Express"
      },
      {
        technology_id: 4,
        title: "CSS"
      }
    ],
    sections: [
      {
        section_id: 1,
        title: "about",
        html:
          `
            <p>When Cathy reached out about developing her personal website, she needed a finished product quickly in anticipation of her book release. By following self-made deadlines each step of the way, and through working closely with a graphic designer, I was able to deliver a stable deployment on-time.</p><p>After the client approved the design for the frontend, I got to work on developing a custom Node.js API. Working with a Postgres database, I was able to keep crucial data away from the React project, which allowed me to develop a second React app to create and modify data.</p><p>The design began with inspiration from a modified Webflow template, where it then was converted to React. I made constant use of custom CSS throughout the project. This allowed me to keep a consistent look throughout, while increasing browser compatibility and responsiveness.
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/cathy-2.gif"
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>Developing this project challenged my knowledge of web development techniques. Some of the key challenges associated with this project's execution include:<ul role="list"><li>Maintaining readability and modularity in a large-scale React App</li><li>CSS-Grid, CSS Animations, and more customized CSS "tricks"</li><li>Structuring a relational database efficiently</li><li>Performing validation and queries with Express</li><li>Performing complex table lookups efficiently utilizing Knex.js</li><li>Integrations for Mailchimp, emailjs, and Google Analytics</ul>
          `,
        img: ""
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>Cathy's project was delivered on-time for her book release. I have been able to provide immediate assistance and modifications to the site's data thanks to the presence of a relational database, and thanks to the continuous deployment through Vercel. New functionality is added regularly to the admin dashboard, to help Cathy maintain the site on her own.</p>
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/cathy-3.gif"
      }
    ]
  },
  {
    project_id: 2,
    url: "austin-and-emily-creative",
    title: "Austin + Emily Creative",
    category: "Web App",
    date: "Mar 2021",
    img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-austin-emily-thumbnail.jpg",
    paragraph:
      "A basic React app built to render a frontend and facilitate a contact form.",
    link: "https://austinandemilycreative.com",
    repo: "https://github.com/austinthaldorfhuelsbeck/austin-and-emily-creative-react",
    technologies: [
      {
        technology_id: 1,
        title: "JavaScript"
      },
      {
        technology_id: 2,
        title: "React"
      },
      {
        technology_id: 4,
        title: "CSS"
      },
      {
        technology_id: 5,
        title: "Bootstrap"
      }
    ],
    sections: [
      {
        section_id: 1,
        title: "about",
        html:
          `
            <p>My wife started a wedding videography business in 2018, and in 2019 I came alongside as her second videographer. It wasn't long before we needed a website, and I built us this basic frontend app to save some money on hosting fees for site-builders.</p><p>This single-page React app displays our portfolio, provides information about us and what we do, and renders a contact form to submit an inquiry. The node.js backend sends alerts to our inbox when a couple reaches out.</p>
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/aec-2.gif"
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>This was the first full-stack app I developed while I was learning Node.js and Express. The API stores data related to the featured couples, and stores all the form's responses into a database.</p><p>The React frontend renders the featured couples by utilizing the API, which allows us to update the site without writing any code.</p></p><p>While developing this project I became quite familiar with the following libraries:</p><ul><li>Express with 'cors' & 'nodemailer'</li><li>Bootstrap & 'react-bootstrap'</li><li>'react-player' for displaying video</li><li>'react-router' for displaying a single-page app</li><li>'react-scrips' to start servers & deployment</li></ul>
          `,
        img: ""
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>The primary purpose of the site is to display our work and to collect leads. In 2021, the form on this site became our top source for getting in contact with new couples.</p><p>The most recent version of the site deployed in March 2021, and the nodemailer solution has remained reliable.</p>
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/aec-3.gif"
      }
    ]
  },
  {
    project_id: 3,
    url: "portfolio-template",
    title: "Portfolio Template",
    category: "Web App",
    date: "May 2021",
    img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-portfolio-thumbnail.jpg",
    paragraph: "A customizable portfolio template built as a single-page app in React, with some custom CSS and simple animations.",
    link: "https://portfolio-with-react-xi.vercel.app/",
    repo: "https://github.com/austinthaldorfhuelsbeck/portfolio-with-react",
    technologies: [
      {
        technology_id: 1,
        title: "JavaScript"
      },
      {
        technology_id: 2,
        title: "React"
      },
      {
        technology_id: 3,
        title: "Node"
      },
      {
        technology_id: 4,
        title: "CSS"
      }
    ],
    sections: [
      {
        section_id: 1,
        title: "about",
        html:
          `
            <p>The site you are visiting was ultimately built to replace this project, and it serves much of the same purpose. A basic single-page app displays a static navbar component and transparent footer component.</p><p>From there, 'react-router' handles the rendering in between. The root directory redirects to display the most recent projects upfront. A secondary project page comes next in the navigation, followed by an about section and full resume.</p>
          `,
        img: ""
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>This project was completed as I reached the end of my bootcamp program, just as I completed my capstone project. I employed much of the same approach as my capstone project:</p><ul><li>A postgreSQL database</li><li>A React.js frontend</li><li>A Node.js and Express backend</li><li>Hosted on Vercel</li></ul>
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/portfolio-1.gif"
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>This site served as my only portfolio through 2021, and I have been able to continue updating it regularly through the continuous deployment on Vercel.</p><p>The design is original and continuously changing, and it is simple to adapt into a React or Next.js app without writing any backend code, or as an HTML/CSS template.</p>
          `,
        img: ""
      }
    ]
  },
  {
    project_id: 4,
    url: "study-app",
    title: "Study App",
    category: "React App",
    date: "March 2021",
    img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/flashcard-o-matic-thumbnail.png",
    paragraph: "A React app that allows users to create, edit, and delete decks and cards within them.",
    link: "https://flashcard-o-matic-one.vercel.app/",
    repo: "https://github.com/austinthaldorfhuelsbeck/flashcard-o-matic",
    technologies: [
      {
        technology_id: 1,
        title: "JavaScript"
      },
      {
        technology_id: 2,
        title: "React"
      },
      {
        technology_id: 5,
        title: "Express"
      },
      {
        technology_id: 6,
        title: "Knex"
      },
      {
        technology_id: 4,
        title: "Bootstrap"
      }
    ],
    sections: [
      {
        section_id: 1,
        title: "about",
        html:
          `
            <p>This was my final React project during my time as a
              <a href="http://thinkful.com/bootcamp/web-development/" rel="noreferrer" target="_blank">Thinkful</a> student.
              The user can create decks to study from within, and then populate those decks with cards. Once a deck has at
              least three cards, it is ready to study from. The user can also edit and delete cards and decks.</p>
            <p>Later, I created an Express API with Knex to store decks and cards in a database. This replaced the JSON
              data which was provided. This allows the app to be configured with any postgres database.</p>
          `,
        img: ""
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>The focus of this project was on the complexity of the routing, and the handling of state being passed down
              through props with React Hooks. It was equally important to break components down to appropriate size and
              to organize the code thoughtfully.</p>
            <p>The styling was implemented with Bootstrap to get a quick good look, and focus on the logic. After the fact,
              an Express API with Knex was added to the project. The React app uses hooks to load and modify the data.</p>
          `,
        img: ""
      }
    ]
  },
]

export const blocks = [
  {
    block_id: 1,
    side: "left",
    alt: false,
    subtext: "Languages + Skills",
    columns: [
      {
        column_id: 1,
        block_id: 1,
        title: "column-one",
        items: [
          {
            item_id: 1,
            column_id: 1,
            link: false,
            title: "HTML + CSS",
          },
          {
            item_id: 2,
            column_id: 1,
            link: false,
            title: "Java",
          },
          {
            item_id: 3,
            column_id: 1,
            link: false,
            title: "PostgreSQL",
          },
        ],
      },
      {
        column_id: 2,
        block_id: 1,
        title: "column-two",
        items: [
          {
            item_id: 4,
            column_id: 2,
            link: false,
            title: "JavaScript",
          },
          {
            item_id: 5,
            column_id: 2,
            link: false,
            title: "Node.js",
          },
          {
            item_id: 6,
            column_id: 2,
            link: false,
            title: "React.js",
          },
        ],
      },
    ],
  },
  {
    block_id: 2,
    side: "left",
    subtext: "Menu",
    alt: true,
    columns: [
      {
        column_id: 3,
        block_id: 2,
        title: "column-one",
        items: [
          {
            item_id: 7,
            column_id: 3,
            link: true,
            external: false,
            title: "Home",
            url: "/"
          },
          {
            item_id: 8,
            column_id: 3,
            link: true,
            external: false,
            title: "Full Portfolio",
            url: "/portfolio",
          },
          {
            item_id: 9,
            column_id: 3,
            link: true,
            external: false,
            title: "About Me",
            url: "/about",
          },
          {
            item_id: 10,
            column_id: 3,
            link: true,
            external: false,
            title: "Send Me A Message",
            url: "/contact",
          },
        ],
      },
    ],
  },
  {
    block_id: 3,
    side: "right",
    subtext: "Get In Touch",
    columns: [
      {
        column_id: 4,
        block_id: 3,
        title: "column-one",
        items: [
          {
            item_id: 10,
            column_id: 4,
            link: true,
            external: true,
            title: "GitHub",
            url: "https://github.com/austinthaldorfhuelsbeck",
          },
          {
            item_id: 11,
            column_id: 4,
            link: true,
            external: true,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/austinhuelsbeck/",
          },
          {
            item_id: 12,
            column_id: 4,
            link: true,
            external: true,
            title: "Twitter",
            url: "https://twitter.com/AustinThaldorf",
          },
        ],
      },
    ],
  },
]

export const pages = [
  {
    page_id: 1,
    title: "about",
    header: "Hello, I'm Austin Thaldorf-Huelsbeck",
    paragraph: "Full-stack web developer who is proficient in HTML, CSS, and JavaScript with React.js and Node.js. Digital marketing specialist and wedding vendor.",
    columnOne: "I live amongst the pines in beautiful Seattle, Washington. I love React, and I spend a lot of my time building React projects and learning new technologies to make my projects better. Using these skills, I have been able to help some of my friends and colleagues to create the web presence of their dreams. When I'm not developing projects, I'm probably creating wedding films with my wife Emily.",
    columnTwo: "Full-stack web development combines a bit of the creative with the technical. My training in digital marketing & filmmaking inform the design side, while my passion for math & engineering informs the technical side. While building apps alone has been rewarding, my goal is to be able to create with a team of like-minded developers. My professional experience over the past decade has taught me that collaboration is the key to creating amazing results and sharpening your own skills.",
    img_src:
      "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/austinthaldorfhuelsbeck.jpg",
    experiences: [
      {
        experienceId: 1,
        title: "Founder, Videographer",
        company: "Austin + Emily Creative",
        start: "July 2019",
        end: "Present",
        url: "https://austinandemilycreative.com/about",
        paragraph: "Helping adventurous couples tell their love story for generations to come."
      },
      {
        experienceId: 2,
        title: "Digital Multimedia Specialist",
        company: "The Seattle School",
        start: "Dec 2018",
        end: "Aug 2021",
        url: "https://theseattleschool.edu/about/",
        paragraph: "Grew video library to 100+. Recorded, distributed a weekly podcast with 3 million downloads. Led major social media initiatives."
      },
      {
        experienceId: 3,
        title: "Video Editor, Creative Director",
        company: "Worship Online",
        start: "Jun 2016",
        end: "Jan 2019",
        url: "https://worshiponline.com/",
        paragraph: "Led the team in designing operations for creating lesson videos. Produced all digital marketing content. Launched a new business as one of the first hires."
      },
      {
        experienceId: 4,
        title: "Certificate in Software Engineering",
        company: "Thinkful",
        start: "Nov 2020",
        end: "July 2021",
        url: "https://www.thinkful.com/bootcamp/web-development/",
        paragraph: "Fast-paced bootcamp with an emphasis on mentorship. HTML, CSS, JavaScript. Postgres, React, Express, Node stack."
      }
    ]
  },
  {
    page_id: 2,
    title: "contact"
  }
]
