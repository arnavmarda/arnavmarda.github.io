import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  c,
  cpp,
  java,
  python,
  numpy,
  pandas,
  pytorch,
  rust,
  swift,
  tensorflow,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  tnb,
  cvg,
  tex,
  pdf_chat,
  twelfthman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Quantitative Analyst",
    company_name: "Anand Rathi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Developed a trading strategy for high-volume trading after earnings' reports for volatile stocks in the NSE using reinforcement learning. The strategy returned an average profit of 11% in simulation testing.",
      "Conducted modelling of the implied volatility smile over a period of a week for the NIFTY and BANKNIFTY indexes using KMeans Clustering and MLP Regression. The model had a weighted mean square error of about 0.0006.",
      "Employed Python (Pandas, NumPy, Keras, Plotly, PyTorch, scikit-learn, PyCaret, Streamlit, YFinance) to conduct analysis, modelling, backtesting and presenting results.",
    ],
  },
  {
    title: "Conversational AI Engineer",
    company_name: "Builder.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2022",
    points: [
      "Developed a Natural Language Processing classifier to classify user inputs provided to the AI to improve user retention.",
      "Optimized AI interactions with the user to better respond to user queries using the classifier to classify inputs. The AI uses the classifier to personalize the response to better answer the users' queries.",
      "Leveraged Python (scikit-learn, spaCy) to complete the classification and testing of the model.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Wes Cambell's Group, UCLA",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Designed a device to track the direction of maximum sunlight with 72% efficiency using Arduino controllers.",
      "Formulated a pipeline to convert the energy from the sunlight using a photo diode to perform solid-state cooling of Ytterbium ions to prepare quantum states.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Tata Institute of Fundamental Research",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2019 - March 2020",
    points: [
      "Researched with professors R. Vijayraghavan and J. Radhakrishnan to create a python package named 'Qube' for Quantum Computation Simulation of upto 10 qubits.",
      "Implemented the Pauli-X, Y, and Z gates along with the H, SX, CX, CY, CZ, CCNOT, SWAP, CSWAP, and arbitrary rotation gates in Qube built using numpy functions written in CPython for speedup.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "twitter-news-bot",
    description:
      "Python API allowing users to create automated news delivery bots on Twitter based on personal interests. The API scrapes Google News for the latest news articles and tweets summarizations created using the Google PaLM API at a specified time intervals.",
    image: tnb,
    source_code_link: "https://arnavmarda.github.io/twitter-news-bot/",
  },
  {
    name: "Cover Letter Generator",
    description:
      "A streamlit based app that generates cover letters for job applications based on the user's resume and the job description. The app uses the Google PaLM model to generate the cover letter.",
    image: cvg,
    source_code_link: "https://github.com/arnavmarda/cover-letter-generator",
  },
  {
    name: "Automata Latex",
    description:
      "A Latex package that greatly simplifies the process of drawing automatas, state machines and generating formal definitions in Latex. The package is created using the Tikz package.",
    image: tex,
    source_code_link: "https://github.com/arnavmarda/Automata-Latex",
  },
  {
    name: "PDF-Chat",
    description:
      "An AI powered, custom-tailored chat bot trained on a database of PDFs provided by the user.",
    image: pdf_chat,
    source_code_link: "https://github.com/arnavmarda/pdf-chat",
  },
  {
    name: "Twelfth Man",
    description:
      "Twelfth Man is a web application that aims to act as a hosting platform for cricket games. We provide features to create player profiles, teams, matches, tournaments, as well as score games.",
    image: twelfthman,
    source_code_link: "https://github.com/arnavmarda/twelfth-man",
  },
];

export { services, technologies, experiences, testimonials, projects };
