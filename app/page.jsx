import qs from "qs"
import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import Institute from '@/components/Institute'
import ViewMore from '@/components/ViewMore'
import getStrapi from '@/functions/getStrapi'
import imgSrc from '@/assets/SD.jpg'

export default async function Page() {
    let query = {
        sort: "date:desc",
        pagination: {
            start: "0",
            limit: "3"
        }
    }
    const latestProjects = await getStrapi("projects", qs.stringify(query), true)

    query.sort = "start:desc"
    const latestEducation = await getStrapi("educations", qs.stringify(query), true)

    const education = [
        {
            name: "University of Windsor",
            start: 2021,
            end: 2024,
            degree: "Bachelor's Degree of Computer Science with distinction",
            logo: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201331/thumbnail_U_Win_1b931c14cd.png"
        },
        {
            name: "Lakehead University",
            start: 2019,
            end: 2021,
            degree: null,
            logo: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201342/thumbnail_LU_a1a50e31b2.png"
        },
        {
            name: "Confederation College",
            start: 2017,
            end: 2019,
            degree: "Associate's Degree in Computer Programming",
            logo: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201337/thumbnail_Confed_dd869c9bf0.png"
        }
    ]

    return (<>
        <p className="text-center">I'm Simeon Davenport. Welcome to my portfolio! Take a look at my ever-growing experience in the realm of Computer Science:</p>
        <PageHeading text="About Me:" topMargin={false} />
        <img src={imgSrc.src} alt="Simeon Davenport" className="w-36 md:w-auto float-left mr-3" />
        <p>Hi, I'm Simeon Davenport—a self-taught web developer with a degree in Computer Science and a passion for building clean, modern web applications. I've been coding since around 2016, where I started with Scratch and Java, and later expanded my skills through formal education and personal projects.</p><br />
        <p>I hold an Associate's Degree in Computer Programming from Confederation College and a Bachelor's Degree in Computer Science with distinction from the University of Windsor. Throughout my academic journey, I gained experience with languages and tools like C++, C#, JavaScript, PHP, and SQL.</p><br />
        <p>In recent years, I've focused on modern web development, learning Node.js, React, Tailwind, and Next.js on my own. The very site you're viewing now was built using these technologies.</p><br />
        <p>Outside of tech, I enjoy exploring geography, animation, and music. I also run a YouTube channel with 700+ subscribers where I create video essays on these topics.</p><br />
        <p>As someone with Asperger's, I embrace my neurodivergence—it fuels my passion for deep learning and drives my commitment to excellence in everything I do. I'm always looking to grow as a developer and excited about what the future holds.</p >
        <PageHeading text="Simeon's Latest Projects:" topMargin={true} />
        <Projects projects={latestProjects.data} langsLinks={false} />
        <ViewMore length={latestProjects.meta.pagination.total} href="/projects" text="View more of Simeon's projects" />
        <PageHeading text="Simeon's Education:" topMargin={true} />
        <div>
            {education.map((ins, i) => {
                return <Institute key={i} name={ins.name} start={ins.start} end={ins.end} logo={ins.logo} degree={ins.degree} />
            })}
        </div>
        <ViewMore length={latestEducation.meta.pagination.total} href="/education" text="View more of Simeon's education" />
    </>)
}