import PageHeading from '@/components/PageHeading'
import imgSrc from '@/assets/SD.jpg'

export default async function Page() {
    return (<>
        <PageHeading text="About Simeon" topMargin={false} />
        <img src={imgSrc.src} alt="Simeon Davenport" className="w-36 md:w-auto float-left mr-3" />
        <p>Hi, I'm Simeon Davenport—a self-taught web developer with a degree in Computer Science and a passion for building clean, modern web applications. I've been coding since around 2016, where I started with Scratch and Java, and later expanded my skills through formal education and personal projects.</p><br />
        <p>I hold an Associate's Degree in Computer Programming from Confederation College and a Bachelor's Degree in Computer Science with distinction from the University of Windsor. Throughout my academic journey, I gained experience with languages and tools like C++, C#, JavaScript, PHP, and SQL.</p><br />
        <p>In recent years, I've focused on modern web development, learning Node.js, React, Tailwind, and Next.js on my own. The very site you're viewing now was built using these technologies.</p><br />
        <p>Outside of tech, I enjoy exploring geography, animation, and music. I also run a YouTube channel with 700+ subscribers where I create video essays on these topics.</p><br />
        <p>As someone with Asperger's, I embrace my neurodivergence—it fuels my passion for deep learning and drives my commitment to excellence in everything I do. I'm always looking to grow as a developer and excited about what the future holds.</p >
    </>)
}