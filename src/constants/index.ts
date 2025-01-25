import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "Feb 2024 - Apr 2024",
        role: "Intern",
        company: "EY Technologies",
        description: `Participated in a virtual internship program organized by EY Technologies in collaboration with AICTE. Developed a full-fledged music website using Python's Django framework.`,
        technologies: ["Python", "Django", "Web Development"],
    },
    {
        year: "Feb 2024 - Mar 2024",
        role: "Intern",
        company: "Edunet Foundation",
        description: `Engaged in a virtual internship program to gain knowledge in AI & Cloud. Developed the College Chatbot using NLP concepts on IBM Cloud.`,
        technologies: ["NLP", "IBM Cloud", "AI"],
    },
];


export const PROJECTS = [
    {
        title: "College Chatbot",
        image: project1,
        description: "An intelligent chatbot application using Natural Language Processing (NLP) to handle college-related queries and information. Features include intent recognition, contextual responses, and seamless integration with college database.",
        technologies: ["React", "Node.js", "OpenAI API", "NLP"],
        link: "https://collegechatbot.tiiny.site/"
    },
    {
        title: "Car Detection System",
        image: project2,
        description: "Computer vision system for detecting and tracking vehicles using OpenCV.",
        technologies: ["Python", "OpenCV", "Machine Learning"],
        link: "https://github.com/thegoofy-dev/OpenCV_car_detection"
    },
    {
        title: "MERN Chat Application",
        image: project3,
        description: "Real-time chat application with user authentication and group chat features.",
        technologies: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://igluz-chatapp.onrender.com/"
    },
    {
        title: "Portfolio Website",
        image: project4,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
];
