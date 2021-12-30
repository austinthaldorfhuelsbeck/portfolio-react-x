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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lacus nisi, erat sed porta. Sem bibendum eu dui convallis. Et id.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed sapien quisque posuere.",
    link: "http://cathyloerzel.com",
    repo: "https://github.com/austinthaldorfhuelsbeck/cathy-loerzel",
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
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et <strong>odio pellentesque</strong> diam volutpat commodo sed. Eu turpis egestas pretium doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at <a href="http://google.com">consectetur lorem</a>. A cras semper auctor nequ.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sit laoreet tincidunt libero odio nisl ornare. Euismod ut imperdiet tincidunt non nunc malesuada. Non urna ornare ultrices hendrerit gravida. Placerat orci in vulputate dignissim facilisis quisque natoque. Aenean erat donec.</p>
          `,
        img: "https://assets.website-files.com/6075067ce85066282bbab900/60764bd0b0f8f46b941cd267_project-creative-x-webflow-template.png"
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et odio pellentesque diam <strong>volutpat commodo sed</strong>. Eu turpis egestas pretium doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at <a href="https://www.google.com/">consectetur lorem</a>. A cras semper auctor nequ.</p><ul role="list"><li>Semper auctor neque vitae tempus quam pellentesque nec nam</li><li>Ecelerisque purus semper eget duis at.</li><li>Urna porttitor rhoncus dolor purus non enim.</li><li>Nulla posuere sollicitudin aliquam ultrices sagittis orci.</li></ul>
          `,
        img: ""
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et odio pellentesque diam volutpat commodo sed. Eu turpis <strong>egestas pretium</strong> doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at consectetur lorem. <a href="https://www.google.com/">A cras semper auctor</a> nequ.</p>
          `,
        img: "https://assets.website-files.com/6075067ce85066282bbab900/60764c67f910134a4053f7b2_project-two-creative-x-webflow-template.png"
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
      "Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed sapien quisque posuere.",
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
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et <strong>odio pellentesque</strong> diam volutpat commodo sed. Eu turpis egestas pretium doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at <a href="http://google.com">consectetur lorem</a>. A cras semper auctor nequ.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sit laoreet tincidunt libero odio nisl ornare. Euismod ut imperdiet tincidunt non nunc malesuada. Non urna ornare ultrices hendrerit gravida. Placerat orci in vulputate dignissim facilisis quisque natoque. Aenean erat donec.</p>
          `,
        img: "https://assets.website-files.com/6075067ce85066282bbab900/60764bd0b0f8f46b941cd267_project-creative-x-webflow-template.png"
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et odio pellentesque diam <strong>volutpat commodo sed</strong>. Eu turpis egestas pretium doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at <a href="https://www.google.com/">consectetur lorem</a>. A cras semper auctor nequ.</p><ul role="list"><li>Semper auctor neque vitae tempus quam pellentesque nec nam</li><li>Ecelerisque purus semper eget duis at.</li><li>Urna porttitor rhoncus dolor purus non enim.</li><li>Nulla posuere sollicitudin aliquam ultrices sagittis orci.</li></ul>
          `,
        img: ""
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et odio pellentesque diam volutpat commodo sed. Eu turpis <strong>egestas pretium</strong> doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at consectetur lorem. <a href="https://www.google.com/">A cras semper auctor</a> nequ.</p>
          `,
        img: "https://assets.website-files.com/6075067ce85066282bbab900/60764c67f910134a4053f7b2_project-two-creative-x-webflow-template.png"
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
      "Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed sapien quisque posuere.",
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
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et <strong>odio pellentesque</strong> diam volutpat commodo sed. Eu turpis egestas pretium doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at <a href="http://google.com">consectetur lorem</a>. A cras semper auctor nequ.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sit laoreet tincidunt libero odio nisl ornare. Euismod ut imperdiet tincidunt non nunc malesuada. Non urna ornare ultrices hendrerit gravida. Placerat orci in vulputate dignissim facilisis quisque natoque. Aenean erat donec.</p>
          `,
        img: "https://assets.website-files.com/6075067ce85066282bbab900/60764bd0b0f8f46b941cd267_project-creative-x-webflow-template.png"
      },
      {
        section_id: 2,
        title: "execution",
        html:
          `
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et odio pellentesque diam <strong>volutpat commodo sed</strong>. Eu turpis egestas pretium doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at <a href="https://www.google.com/">consectetur lorem</a>. A cras semper auctor nequ.</p><ul role="list"><li>Semper auctor neque vitae tempus quam pellentesque nec nam</li><li>Ecelerisque purus semper eget duis at.</li><li>Urna porttitor rhoncus dolor purus non enim.</li><li>Nulla posuere sollicitudin aliquam ultrices sagittis orci.</li></ul>
          `,
        img: ""
      },
      {
        section_id: 3,
        title: "results",
        html:
          `
            <p>Sit amet massa vitae tortor condimentum lacinia. Donec et odio pellentesque diam volutpat commodo sed. Eu turpis <strong>egestas pretium</strong> doloril aenean. Aliquamisl. vel orci. Nunc pulvinar sapien et ligula. Eget arcu dictum varius duis at consectetur lorem. <a href="https://www.google.com/">A cras semper auctor</a> nequ.</p>
          `,
        img: "https://assets.website-files.com/6075067ce85066282bbab900/60764c67f910134a4053f7b2_project-two-creative-x-webflow-template.png"
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