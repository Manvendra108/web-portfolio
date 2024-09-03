import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Manvendra Singh Rathod",
    stack:["Software Engineer", "Front End Developer", "Freelancer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "CRYPTO TRACKER",
        desc: "Introducing CryptoTracker, the ultimate tool for real-time cryptocurrency monitoring and analysis. Designed to meet your crypto tracking needs, CryptoTracker allows you to compare various cryptocurrencies, view detailed graphs, and analyze key metrics like prices, total volumes, and market caps. Search through the top 100 cryptocurrencies and effortlessly add your favorites to a personalized watchlist.Built with React JS for a responsive and dynamic frontend, CryptoTracker integrates Material UI for sleek and functional components, and Chart.js for comprehensive graphical representations. Axios handles efficient API calls, while React Router ensures smooth navigation. The app fetches real-time data using the CoinGecko API and features engaging animations with Framer Motion. CryptoTracker combines these technologies to deliver a powerful, user-friendly crypto tracking experience. ",
        image: "crypto.png",
        live: true,
        technologies: ["React", "Chart.js", "Redux", "Material UI", "Axios","Axios"," Framer Motion"],
        link: "https://crypto-tracker-kohl-seven.vercel.app/",
        github: "https://github.com/Manvendra108/Crypto-Tracker"
    },
    {
        title: "WEIRDOS",
        desc: "Developed NFT Collection website, a fully responsive and visually stunning landing page built with React JS. Designed to captivate and engage, this platform features a unique design and multiple sections, including Home, About, Showcase, Team, and FAQ, all tailored to showcase your NFT collection effectively. Our website leverages advanced technologies such as GSAP for smooth scrolling animations, react-confetti for vibrant background effects, and SVG animations to enhance user interaction. Speed optimization is achieved through code-splitting and lazy loading, ensuring fast load times and a seamless experience. With a component-based structure and easy customization, this site offers a modern, scalable solution for presenting your NFTs. Additionally, I am in the process of integrating blockchain technology using Solidity, to bring secure and decentralized features to your NFT collection.",
        image: "nft.png",
        live: false,
        technologies: ["React", "gsap", "javascript", "typewriter-effect"],
        link: "https://nft-website-ashen.vercel.app/",
        github: "https://github.com/Manvendra108/NFT-Website"
    },
    {
        title: "JOBOARD",
        desc: "Developed a dynamic job portal using React and Vite with a stunning UI designed with Tailwind CSS. Utilized state and props management, and integrated Firebase for real-time updates. Built a comprehensive job listing system with advanced search and filtering capabilities. Data is stored and synchronized in Firebase Firestore, ensuring up-to-date information.",
        image: "job.png",
        live: false,
        technologies: ["React", "javascript", "Tailwind", "Clerk Authentication "],
        link: "https://joboard-jade.vercel.app/",
        github: "https://github.com/Manvendra108/Joboard"
    },
    
    
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB"]
    },
    {
        title: "Languages",
        skills: ["C++", "Java", "JavaScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "MongoDB Compass", "Figma"]
    }
]
const socialLinks = [
    { link: "https://github.com/Manvendra108", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/manvendra-singh-rathod/", icon: IconBrandLinkedin },
    { link: "https://x.com/Manvendra_100", icon: IconBrandInstagram }, 
     
];



const ExperienceInfo = [
    {
        role: "Front End Developer",
        company: "Evara Labs",
        date: "feb 2024 - mar 2024",
        desc: "As a freelance Frontend React.js Developer at Evara Labs, I collaborated closely with a dynamic team to deliver high-quality web applications. During this role, I honed my skills in React.js, working on there website and enhanced my proficiency in building interactive and responsive user interfaces. This experience provided me with valuable insights into effective teamwork, project management, and advanced frontend development techniques. I also expanded my knowledge of modern development practices and tools, contributing to both the technical and collaborative aspect of the project.",
        skills: [ "React JS", "JavaScript", "GSAP", "redux"]
    },
    {
        role: "Web Developer",
        company: "AKsoft",
        date: "Nov 2022 - jan 2023",
        desc: " During my training at Aksoft, I developed a strong foundation in web development, focusing on HTML, CSS, and JavaScript. I learned to create well-structured web pages using HTML, style and layout them effectively with CSS, and enhance interactivity through JavaScript. Additionally, I gained valuable skills in building responsive websites that adapt to various devices and screen sizes, ensuring an optimal user experience across platforms. This hands-on training has equipped me with the practical skills needed to design and implement modern, dynamic web solutions.",
        skills: [  "JavaScript","Java", "HTML","CSS","MySQL", "MongoDB"]
    }
]
const Slugs = [
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "express",
    "mysql",
    "firebase",
    "nginx",
    "vercel",
    "git",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };