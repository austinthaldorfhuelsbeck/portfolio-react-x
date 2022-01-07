
export const nav = [
  {
    nav_id: "1",
    title: "Home",
    link: "/",
    order: 1,
  },
  {
    nav_id: "2",
    title: "Portfolio",
    link: "portfolio",
    order: 2,
  },
  {
    nav_id: "3",
    title: "About",
    link: "about",
    order: 3,
  },
  {
    nav_id: "4",
    title: "Contact",
    link: "contact",
    order: 4,
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
    img_src:
      "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/austinthaldorfhuelsbeck-2.jpg",
    paragraph:
      "Building, creating, and fine-tuning is where I feel at home. Whether it's solving a design challenge, or editing a feature film, I've always gravitated towards the problem-solving side of creative fields. Learning to code has brought that problem-solving, engineering-mindedness into full focus.",
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
        title: "React.js"
      },
      {
        technology_id: 3,
        title: "Node.js"
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
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-cathy-loerzel-thumbnail.jpg"
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
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-cathy-loerzel-thumbnail.jpg"
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
    repo: "https://github.com/austinthaldorfhuelsbeck/austin-and-emily-creative",
    technologies: [
      {
        technology_id: 1,
        title: "JavaScript"
      },
      {
        technology_id: 2,
        title: "React.js"
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
            <p>My wife started a wedding videography business in 2019, and in 2020 I came alongside as her second videographer. It wasn't long before we needed a website, and I built us this basic frontend app to save some money on hosting fees for site-builders.</p><p>This single-page React app displays our portfolio, provides information about us and what we do, and renders a contact form to submit an inquiry. The node.js backend sends alerts to our inbox when a couple reaches out.</p>
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-austin-emily-thumbnail.jpg"
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
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-austin-emily-thumbnail.jpg"
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
    paragraph:
      "A customizable portfolio template built as a single-page app in React, with some custom CSS and simple animations.",
    link: "http://austinthaldorfhuelsbeck.com",
    repo: "https://github.com/austinthaldorfhuelsbeck/portfolio-with-react",
    technologies: [
      {
        technology_id: 1,
        title: "JavaScript"
      },
      {
        technology_id: 2,
        title: "React.js"
      },
      {
        technology_id: 3,
        title: "Node.js"
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
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-portfolio-thumbnail.jpg"
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>This project was completed as I reached the end of my bootcamp program, just as I completed my capstone project. I employed much of the same approach as my capstone project:</p><ul><li>A postgreSQL database</li><li>A React.js frontend</li><li>A Node.js and Express backend</li><li>Hosted on Vercel</li></ul>
          `,
        img: ""
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>This site served as my only portfolio through 2021, and I have been able to continue updating it regularly through the continuous deployment on Vercel.</p><p>The design is original and continuously changing, and it is simple to adapt into a React or Next.js app without writing any backend code, or as an HTML/CSS template.</p>
          `,
        img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-portfolio-thumbnail.jpg"
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
            title: "Full Portfolio",
            url: "/portfolio",
          },
          {
            item_id: 8,
            column_id: 3,
            link: true,
            external: false,
            title: "About Me",
            url: "/about",
          },
          {
            item_id: 9,
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
    columnOne: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sit amet, consectetur adipiscing elit",
    columnTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem",
    img_src:
      "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/austinthaldorfhuelsbeck.jpg",
    experiences: [
      {
        experienceId: 1,
        title: "Senior Product Designer",
        company: "Google",
        start: "Jan 2020",
        end: "Present",
        url: "http://www.google.com",
        paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
      },
      {
        experienceId: 2,
        title: "Lead UI Designer",
        company: "Webflow",
        start: "Feb 2021",
        end: "Dec 2021",
        url: "http://www.webflow.com",
        paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
      },
      {
        experienceId: 3,
        title: "UI/UX Designer",
        company: "Twitter",
        start: "Jan 2018",
        end: "Jan 2021",
        url: "http://www.twitter.com",
        paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
      },
      {
        experienceId: 4,
        title: "Mobile UI/UX Designer",
        company: "Facebook",
        start: "Jan 2015",
        end: "Dec 2017",
        url: "http://www.facebook.com",
        paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
      }
    ]
  },
  {
    page_id: 2,
    title: "contact"
  }
]
