
const serviceItems = [
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        title: "React",
        text: "My years of experience with React, including the utilization of hooks, Redux, and Context API, have allowed me to construct responsive and interactive user interfaces and create streamlined state management systems for complex web applications.",
        order: 1,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        title: "TypeScript",
        text: "By leveraging TypeScript's static type checking and other functionalities, I have enhanced the dependability and maintainability of my web applications while detecting errors early on through my experience with it.",
        order: 3,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        title: "CSS",
        text: "Proficient in utilizing CSS to craft visually appealing and responsive user interfaces, I have demonstrated my expertise by achieving a top 5% score among roughly 2 million individuals who have taken the LinkedIn assessment.",
        order: 4,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: "JavaScript",
        text: "I have extensive experience working with JavaScript and have developed a strong understanding of its core concepts, including object-oriented programming, asynchronous programming, and functional programming. Additionally, I have used JavaScript to develop a wide range of applications, from simple scripts to complex web applications.",
        order: 2,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        title: "C#",
        text: "With comprehensive proficiency in C#'s syntax, object-oriented programming principles, and its application in developing robust and scalable software applications, I have created diverse applications, such as web and desktop applications, utilizing this language.",
        order: 7,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        title: "Java",
        text: "With a wealth of experience in Java, encompassing its syntax, object-oriented programming principles, and its application in building durable and scalable software applications, I have also utilized OpenGL for creating 3D applications and games using Java.",
        order: 8,
        proficiency: 80
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        title: " Microsoft SQL Server",
        text: "Proficient in Microsoft SQL Server's syntax, relational database principles, and its application in creating scalable and efficient database systems, I have designed and optimized intricate database structures, implemented stored procedures, and formulated efficient queries for extracting data.",
        order: 9,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        title: "PostgreSQL",
        text: "With a wealth of experience in PostgreSQL, encompassing its syntax, relational database principles, and its application in developing scalable and efficient database systems, I have designed and optimized intricate database structures, implemented stored procedures, and formulated efficient queries for extracting data.",
        order: 10,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg",
        title: "OpenGL",
        text: "Skilled in OpenGL's fundamental concepts and its utilization in developing 3D graphics and games, I have worked on various projects utilizing this technology to create and render 3D models, apply textures and lighting effects, and implement user interaction.",
        order: 11,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        title: "Bootstrap",
        text: "I have extensive experience working with Bootstrap and have developed a strong understanding of its grid system, components, and utility classes, enabling me to create responsive and visually appealing user interfaces efficiently. Additionally, I have used Bootstrap to develop web applications with cross-browser compatibility and optimized performance.",
        order: 5,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
        title: "Heroku",
        text: "With extensive experience utilizing Heroku, I have developed a comprehensive understanding of its cloud platform and its ability to deploy, manage, and scale web applications with ease. Additionally, I have leveraged Heroku to build and deploy various web applications, ranging from simple prototypes to complex systems, while ensuring seamless integration with other third-party services.",
        order: 13,
        proficiency: 20
    },
    {
        source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        title: "Azure",
        text: "I have extensive experience working with Microsoft Azure and have developed a strong understanding of its cloud computing services, including virtual machines, app services, and containerization. With Azure, I have deployed, managed, and scaled various web applications and services, utilizing its advanced features for security, analytics, and monitoring. Additionally, I have integrated Azure with other Microsoft technologies and third-party services to create seamless and efficient workflows.",
        order: 12,
        proficiency: 20
    }
].sort(({ order: a }, { order: b }) => a - b)

export default serviceItems