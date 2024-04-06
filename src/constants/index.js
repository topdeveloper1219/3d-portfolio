// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    News,
    Qr,
    Simon,
    Drum,
    Watch,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    Firebase,
    Rest,
    postgresql,
    Mysql,
    Three,
    Infosys,
    Iceland,
    EnginerrByte,
    Drawing,
    Shopper,
    Password
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },   
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: Firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: Rest,
        name: "Rest",
        type: "Frontend and Backend",
    },
    
    {
        imageUrl: Mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: Three,
        name: "Three",
        type: "3d-Animation",
    }
];

export const experiences = [
    {
        title: "System Engineer",
        company_name: "Infosys",
        icon: Infosys,
        iconBg: "#accbe1",
        date: "Dec 2021 - Sep 2023",
        points: [
            "With a cumulative experience of 1 year and 9 months in the IT industry, I have gained valuable expertise and professional growth in various aspects of the field.",
            "Underwent comprehensive training in a range of technologies vital to the industry, including HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, Kanban methodology, computer networks, Linux, version control, and other cutting-edge technologies",
            "Effectively communicated technical concepts and findings to diverse audiences, including team members, stake-holders, and clients, in a clear and concise manner.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ],
    },

    {
        title: "Personal Project",
        company_name: "3D Portfolio Website",
        icon: Iceland,
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Nov 2023",
        points: [
            "Designed a unique floating island in the sky with a plane and a magical bird, all rendered in 3D to provide users with an enchanting and memorable exploration.",
            "Implemented dynamic 3D elements that react and change their motion dynamically based on user interactions, providing an extra layer of immersion and engagement.",
            "The portfolio has a feature that plays sound when you click on certain things, making the experience more engaging.",
            "For code and more details related to this personal project, please refer to the Projects section."
        ],
    },

    {
        title: "Personal Project",
        company_name: "Web Drawing Tool",
        icon: Drawing,
        iconBg: "#b7e4c7",
        date: "Jan 2024 - Feb 2024",
        points: [
            "Developed a suite of drawing tools using Next.js and Tailwind CSS, which includes pens, 6 color options, eraser, and adjustable brush sizes, while ensuring responsive design principles.",
            "Engineered real-time collaboration using Socket.IO and NodeJS, enabling seamless simultaneous editing by over 50 users on shared drawings",
            "Deployed seamless export functionality, enabling users to save their creations as high-quality JPG files with a single click, resulting in a 40% increase in user satisfaction.",
            "For live links and code related to this personal project, please refer to the Projects section."
        ],
    },

    {
        title: "Personal (MERN Project)",
        company_name: "Engineer Byte",
        icon: EnginerrByte,
        iconBg: "#a2d2ff",
        date: "feb 2024 - Present",
        points: [
            "Currently, the project is in the development phase of a comprehensive learning platform website for my brands. This project aims to create a versatile online space that encompasses various educational features",
            "Includes Blog Section for informative articles and updates.",
            "Course Section offering various educational modules and tutorials",
            "Responsive Design for optimal user experience across devices",
            "Will provide updates upon project completion"

        ],
    }
    

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Abhimanyu668',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhimanyu630/',
    }
];

export const projects = [
    {
        iconUrl: EnginerrByte,
        theme: 'btn-back-blue',
        name: 'Engineer Byte(MERN Project)',
        description: 'Currently, the project is in the development phase of a comprehensive learning platform website for my brands. This project aims to create a versatile online space that encompasses various educational features',
        link: 'https://engineerbyte.com/',
        Github: 'https://github.com/Abhimanyu668/Mern-Blog-App',
    },

    {
        iconUrl: Drawing,
        theme: 'btn-back-orange',
        name: 'Web Drawing Tool',
        description: 'This is a web-based collaborative drawing tool that allows users to create diagrams, sketches in a simple and intuitive manner. It is designed to be easy to use and accessible for both individuals and teams.',
        link: 'https://online-drawing-tool-smoky.vercel.app/',
        Github: 'https://github.com/Abhimanyu668/Online-Drawing-Tool',
    },

    {
        iconUrl: Iceland,
        theme: 'btn-back-green',
        name: '3D Portfolio website',
        description: 'Welcome to the repository for my 3D portfolio website! This unique and immersive website takes you on a journey through a floating island in the sky, featuring interactive 3D elements that showcase my portfolio. Say goodbye to endless scrolling and hello to a captivating experience where you can navigate by dragging your mouse and using your keyboard.',
        link: 'https://abhimanyuportfolio.online/',
        Github: 'https://github.com/Abhimanyu668/3D-Portfolio-website',
    },

    {
        iconUrl: Shopper,
        theme: 'btn-back-yellow',
        name: 'SHOPPER-ECommerce',
        description: 'Developed an intuitive frontend for an E-commerce website aimed at providing users with a seamless shopping experience. Implemented modern design principles and user interface components to enhance usability and engagement.',
        link: 'https://sparkling-lamington-2d3597.netlify.app/',
        Github: 'https://github.com/Abhimanyu668/SHOPPER-ECommerce',
    },

    {
        iconUrl: News,
        theme: 'btn-back-red',
        name: 'Modern News Application',
        description: 'Created modern news application, a sleek and intuitive web-based platform for staying updated with the latest news. This application is designed with a user-friendly interface, allowing you to effortlessly navigate through different news topics and read articles in a beautiful card format',
        link: 'https://github.com/Abhimanyu668/News_App',
        Github: 'https://github.com/Abhimanyu668/News_App',
    },
    {
        iconUrl: Watch,
        theme: 'btn-back-green',
        name: 'Responsive Watches Website',
        description: 'This project is a modern and responsive website designed for showcasing a collection of watches. The website features a beautiful and user-friendly interface that works seamlessly across all devices, including mobile devices. Additionally, it incorporates animated images to enhance the overall ui',
        link: 'https://abhimanyu668.github.io/Watches-website/',
        Github: 'https://github.com/Abhimanyu668/Watches-website',
    },
    {
        iconUrl: Simon,
        theme: 'btn-back-blue',
        name: 'Simon Game',
        description: 'Simon Game is a simple memory-based game that challenges your pattern-recognition skills. The game displays a series of tiles in a specific sequence, and your task is to click on the tiles in the same order. As you progress through the levels, the patterns become more complex, testing your memory and attention',
        link: 'https://abhimanyu668.github.io/simon-game-js/',
        Github: 'https://github.com/Abhimanyu668/simon-game-js',
    },
    {
        iconUrl: Qr,
        theme: 'btn-back-pink',
        name: 'QR Code Generator',
        description: 'QR Code Generator is a Node.js application that allows you to generate QR codes from URLs. You can use this tool to quickly generate QR codes for various purposes, such as sharing URLs, contact information, or product details.',
        link: 'https://github.com/Abhimanyu668/QR-Code-Generator-Node.js',
        Github: 'https://github.com/Abhimanyu668/QR-Code-Generator-Node.js',
    },
    {
        iconUrl: Drum,
        theme: 'btn-back-black',
        name: 'Virtual Drum Kit',
        description: 'This web-based music game allows you to play the drums using your mouse or keyboard. You can create your own drumming beats and have fun making music.',
        link: 'https://abhimanyu668.github.io/Virtual-Drum-Kit/',
        Github: 'https://github.com/Abhimanyu668/Virtual-Drum-Kit',
    },

    {
        iconUrl: Password,
        theme: 'btn-back-red',
        name: 'PasswordGenerator',
        description: 'Welcome to the PasswordGenerator React project! This project allows you to generate strong and random passwords based on customizable criteria.',
        link: 'https://65c32f1ba65f4f4bdb079f64--animated-gecko-91687f.netlify.app/',
        Github: 'https://github.com/Abhimanyu668/PasswordGenerator-React',
    },

    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Amazon/Flipkart price tracker',
        description: 'Developed an Dekstop application that monitors and compares product prices on Amazon and Flipkart. The system sends an email notification when the current price falls below or matches our specified desired price. The application features a user-friendly graphical interface.',
        link: 'https://www.youtube.com/watch?v=abTF4kKch14',
        Github: 'https://github.com/Abhimanyu668/Money_Saver',
    }
];