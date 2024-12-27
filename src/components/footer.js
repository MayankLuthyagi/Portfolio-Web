import Link from "next/link"
import { Marhey} from "next/font/google"

const marhey = Marhey({ subsets: ["latin"] });

export default function Footer() {
    const info ="I'm available for freelance work. If you have a project you think I can help with, please get in touch."
    return (
        <footer style={{paddingTop:'2rem'}} className="bg-[#060606]">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Link href={"mailto:mayankluthyagico@gmail.com"} className={`underline text-xl ${marhey.className}`}>mayankluthyagico@gmail.com</Link>

                </div>

                
            </div>

            <div className="container flex items-center px-4 md:px-6" >
                <div className="mx-auto flex items-center flex-col gap-1 text-xs">
                    <br/>
                    <p className="text-gray-500 dark:text-gray-400" alt="© 2024 Parth Kabra. All rights reserved">© 2025 Mayank. All rights reserved.</p>
                    <p style={{marginBottom:'2rem'}} className="text-gray-500 dark:text-gray-400" alt="This website took 10+ coffees to bring to life.">Dhanyawad </p>
                </div>
            </div>
        </footer>
    )
}
