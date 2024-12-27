'use client'
import HomeComponent from "@/components/home";
import { Skills } from "@/components/skills";
import Projects from "@/components/projects"
import Experiences from "@/components/experiences";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect  , useState} from "react";
import { Blocks } from "react-loader-spinner";


export default function Home() {
	const [loading , setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);	
  return (
	<>
	{loading ? (
		<div className="h-screen">
			<div className="absolute top-1/2  text-blue left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Blocks
                height="80"
                width="80"
                color="#0000ff"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
            />
			<span className="text-white text-center">Please wait..</span>
			</div>
			 </div>
		
	) : (
		<>
		<HomeComponent />
		<Skills />
		<Projects />
		{/*<About />*/}
		<Experiences />
		<Contact />
		<Footer />
	</>
	)}

		
	</>
  )
};

