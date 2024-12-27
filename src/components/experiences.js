import styles from "@/constants.js/styles"
import Image from "next/image"
import Link from "next/link"
import { OpportuneXLogo, Talentd} from "@/constants.js/assets"
import { TalendLink , OpportuneXLink,} from "@/constants.js/links"
function Experience({ experience, id }) {
    return (
        <>
            <div
                className={`p-2 m-1 project-card rounded-xl shadow-lg min-h-[150px] flex flex-col justify-between items-start`}
            >
                <div className={`${styles.alignCenter}`}>
                    <Image src={experience.logo} className="w-[35px] shadow-md" />
                    {experience.link ? (
                        <Link alt={experience.title} className="underline" href={experience.link}>
                            <h1 className="text-lg mx-2">{experience.title}</h1>
                        </Link>
                    ) : (
                        <h1 alt={experience.title} className="text-lg mx-2">{experience.title}</h1>
                    )}
                </div>
                <p className="text-[#c6c6c6b3] text-[12px] my-1">{experience.time}</p>
                <p alt={experience.info} className="text-[#ffffffde] text-[15px] my-1">
                    {experience.info}
                </p>
                {id == 0 ? (
                    <div className="blur-box absolute right-0 w-[80px] h-[80px] my-[-4px]"></div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

function Experiences() {
    const experiences = [
        {
            title: "OpportuneX",
            info: "Full Stack Developer",
            logo: OpportuneXLogo,
            link: OpportuneXLink,
            time: "October 2024 - Currently",
        },
        {
            title: "Talentd",
            info: "Backend Developer Intern",
            logo: Talentd,
            link: TalendLink,
            time: "December 2024 - June 2025",
        },
    ];

    return (
        <>
            <section className="w-full p-3 bg-black" id="experiences">
                <div className="leading-[1.3] p-4 text-center">
                    <h1
                        alt="Journey Highlights"
                        className={`${styles.subheading} text-pink`}
                    >
                        Experience
                    </h1>
                    <p className={`text-[#ffffffb3] ${styles.paragraph} my-2`}>
                        I have gained invaluable experience working with diverse startups, contributing to a variety of impactful projects.
                    </p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className={`grid gap-4 sm:gap-3 lg:grid-cols-2 xl:gap-6`}>
                        {experiences.map((exp, ind) => (
                            <Experience experience={exp} id={ind} key={ind} />
                        ))}
                    </div>
                </div>
                <br />
                <br />
            </section>
        </>
    );
}

export default Experiences;
