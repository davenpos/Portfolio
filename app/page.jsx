import PageHeading from '@/components/PageHeading'
import Institute from '@/components/Institute'
import ProjectListing from '@/components/ProjectListing'
import EmailForm from '@/components/EmailForm'
import imgSrc from '@/assets/SD.jpg'

export default async function Page() {
    const projects = [
        {
            name: "PROJXON Website",
            description: "I helped rebuild the PROJXON website from React to Next.js to improve SEO, working with three others over three weeks. I optimized code using DRY principles, integrated blogs and testimonials from a headless WordPress via the REST API, and enabled logged-in users to add testimonials. I implemented SSG and ISR for efficient data fetching and added metadata. This project enhanced my skills in React Bootstrap, internal API calls in Next.js, and balancing static and dynamic rendering for performance.",
            screenshot: "https://res.cloudinary.com/dijfqanyt/image/upload/v1743694875/PROJXON_home_page_bdf4a89784.png",
            link: "https://www.projxon.com/",
            code: "https://github.com/PROJXON/ProjxonNext",
            date: new Date("2025-04-02"),
            langsAndStacks: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Bootstrap", "WordPress"]
        },
        {
            name: "Censor Swear Words plugin",
            description: "This custom WordPress plugin allows users to censor swear words on their site and then choose how to censor each one individually. After the plugin is activated, users can navigate to the new option in the admin menu called \"Censor Swear Words\". They can then type in a comma-separated list of words and press \"Save Changes\". They can then go to the setting submenu and type in a custom value for each word, which will replace every instance of each word on the site. They can use stars, dashes, replace only the vowels, keep the first letter, etc.",
            screenshot: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201407/CSW_1_e301c96a1e.png",
            code: "https://github.com/davenpos/Censor-Swear-Words",
            date: new Date("2024-05-23"),
            langsAndStacks: ["HTML", "CSS", "PHP", "WordPress"]
        },
        {
            name: "Sheet Music Project",
            description: "Inspired by a couple of Node.js applications I had built in the summer prior, I created another Node.js project that allows users to create a piece of sheet music, similar to Finale. Users can log in or sign up, create a very simple piece of sheet music and display it in the web browser. The application runs on an Express server, utilizes an MVC framework and EJS for the views and stores all information into a MySQL database. All musical notation is displayed using special characters in a font called Bravura Text.",
            screenshot: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201454/SMM_1_569919f117.png",
            code: "https://github.com/davenpos/Sheet-Music-Project",
            date: new Date("2024-03-24"),
            langsAndStacks: ["Node.js", "Express", "MySQL", "SCSS", "EJS"]
        },
        {
            name: "WordPress REST API Android App",
            description: "This Android application allows users to log in to their account on a WordPress site and create a brand new post or page on the site. WordPress will in turn create and publish the page via the WordPress REST API which will then be available on the front end. It allows users to not have to log into the admin dashboard to create posts or pages and can do it from this app instead. This application was built as part of a group project with two other people.",
            screenshot: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201236/App2_af191372ef.png",
            link: "https://simon31.myweb.cs.uwindsor.ca/",
            code: "https://github.com/CheeseyDanish/Comp_4200_Project",
            date: new Date("2024-03-24"),
            langsAndStacks: ["Java", "WordPress", "Android"]
        },
        {
            name: "Ofori Beauty theme",
            description: "A custom WordPress site I built for Ofori Beauty as part of Riipen's Level Up program. I created the theme from scratch, designed it to look like the original site at the time, with some new features such as a blog section, a 404 page, a live search and a custom color picker. It also utilized WooCommerce, SCSS, jQuery, Font Awesome and mobile-first responsive design. It took about a month to build and I was paid $1400 to make it.",
            screenshot: "https://res.cloudinary.com/dijfqanyt/image/upload/v1732201360/medium_OB_1_bd4ecbeea1.png",
            code: "https://github.com/davenpos/Ofori-Beauty-WordPress-theme",
            date: new Date("2023-12-09"),
            langsAndStacks: ["WordPress", "WooCommerce", "SCSS", "jQuery", "Font Awesome"]
        }
    ]

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
        <PageHeading text="My Latest Projects:" topMargin={true} />
        <div>
            {projects.map((p, i) => {
                return <ProjectListing key={i} title={p.name} desc={p.description} img={p.screenshot} link={p.link} code={p.code} date={p.date} las={p.langsAndStacks} />
            })}
        </div>
        <PageHeading text="My Education:" topMargin={true} />
        <div>
            {education.map((ins, i) => {
                return <Institute key={i} name={ins.name} start={ins.start} end={ins.end} logo={ins.logo} degree={ins.degree} />
            })}
        </div>
        <PageHeading text="Contact Me:" topMargin={false} />
        <p>The best way to contact me is via email. The form to email me is below. My personal email address is simmywim@hotmail.com. I can further be reached by phone at +1 (226)-402-3639. You can also connect with me on LinkedIn, which you can find the link to in the footer. If you wish to see my resume, a link to it can also be found in the footer.</p>
        <EmailForm />
    </>)
}