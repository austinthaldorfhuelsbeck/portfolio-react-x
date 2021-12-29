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
    category: "Web App",
    date: "Oct 2021",
    img: "https://portfolio-x-ath.s3.us-west-2.amazonaws.com/ath-cathy-loerzel-thumbnail.jpg",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed sapien quisque posuere.",
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
