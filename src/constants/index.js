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
  sse,
  vqa,
  llm
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
    title: "AI Engineer",
    company_name: "Skypoint.ai",
    icon: null,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Pioneered the development of a complete multi-agentic RAG retrieval and retry system using the Microsoft Autogen library, improving query resolution time by 30% and reducing hallucinations in the LLM output.",
      "Crafted a hybrid search engine based retrieval pipeline for a key client, combining metadata search and vector search leading to 25% better search performance.",
      "Streamlined multi-SQL table retrieval pipelines for large scale LLM applications using vector search increasing the accuracy of QA outputs on structured datasets."
    ],
  },
  {
    title: "Quantitative Analyst",
    company_name: "Anand Rathi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Engineered a reinforcement learning-based trading strategy for high-volume trades following earnings reports of volatile stocks on the NSE, achieving an average simulated profit of 11%.",
      "Analyzed and modeled the implied volatility smile for the NIFTY and BANKNIFTY indexes using KMeans Clustering and MLP Regression, resulting in a weighted mean square error of 0.0006 over a week-long period.",
      "Utilized Python (Pandas, NumPy, Keras, Plotly, PyTorch, scikit-learn, PyCaret, Streamlit, YFinance) for comprehensive analysis, modeling, backtesting, and presentation of financial data insights."
    ],
  },
  {
    title: "Conversational AI Engineer",
    company_name: "Builder.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2022",
    points: [
      "Modeled an NLP classifier to categorize user inputs for an AI system, improving user retention rates by 15%.",
      "Optimized AI interactions by implementing a personalized response system based on classified user inputs, increasing query response accuracy by 20% and user satisfaction by 25%.",
      "Leveraged Python (scikit-learn, spaCy) to build and test the classification model, achieving an 85% accuracy rate in user input categorization."
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
    name: "Twelfth Man",
    description:
      "Twelfth Man is a web application that aims to act as a hosting platform for cricket games. We provide features to create player profiles, teams, matches, tournaments, as well as score games.",
    image: twelfthman,
    source_code_link: "https://github.com/arnavmarda/twelfth-man",
  },
  {
    name: "Semantic Search Engine",
    description:
      "A semantic search engine using embeddings to provide a smarter way to search on the web. The search engine currently supports Google, Bing, Github and Stack Exchange search.",
    image: sse,
    source_code_link: "https://github.com/arnavmarda/semantic-search-engine",
  },
  {
    name: "Visual Question Answering",
    description:
      "A research project aimed at training an efficient model for Visual Question Answering using Fast R-CNN and evaluating against other SOTA models on a curated dataset.",
    image: vqa,
    source_code_link: "https://ucladeepvision.github.io/CS163-Projects-2024Fall/2024/12/12/team36-VQA-analysis.html"
  },
  {
    name: "Specified Backup for Fragile Parts of LLMs",
    description:
      "A research paper analyzing the effects of random hardware bit flips on Large Language Models (LLMs) including the effects on different layers and modules of the model. The paper also identifies security issues such as denial of service attacks and model architecture leaks using induced pseudo-random bit flips.",
    image: llm,
    source_code_link: "https://github.com/hametar0u/ECE-117-LLM-Backup/tree/main"

  }
];

export { services, technologies, experiences, projects };
