import { Reveal } from "./reveal"
import { tailwind } from "@/constants.js/assets"
import Image from "next/image"
import styles from "@/constants.js/styles"

export function Skills(){
return (
<section id="skills" className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16">
<h2 className={`${styles.subheading} text-pink`}>
    Skills
</h2>
<p className={`${styles.paragraph} mb-8 mx-2 text-center`}>
    These are my skills, and I'm constantly working on improving them! 😄
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 items-start">
    {/* Languages */}
    <Reveal
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
    >
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Languages
            </h3>

            <div className="flex flex-row flex-wrap justify-center gap-4">
                {/* Java */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
                    </svg>
                    <p className="text-sm text-muted-foreground">Java</p>
                </div>
                {/* JavaScript */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">JavaScript</p>
                </div>
                {/* Python */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">Python</p>
                </div>
            </div>
        </div>
    </Reveal>
    {/* Frontend */}
    <Reveal
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
    >
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Frontend
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {/* CSS */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" className="hover:animate-spin">
                        <path d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z" opacity=".35"></path><path fill="#f2f2f2" d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"></path><polygon fill="#2b59a1" points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"></polygon><path fill="#40396e" d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"></path><polygon fill="#2785bd" points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"></polygon><polygon fill="#d9eeff" points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"></polygon><polygon fill="#d9eeff" points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"></polygon><polygon fill="#d9eeff" points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"></polygon><path fill="#f2f2f2" d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">CSS</p>
                </div>

                {/* HTML */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">HTML</p>
                </div>

                {/* React */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="animate-spin hover:animate-none">
                        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                    </svg>
                    <p className="text-sm text-muted-foreground">React</p>
                </div>

                 {/* Tailwind CSS*/}
                 <div className="flex flex-col items-center justify-center">
                    <Image src={tailwind} className="hover:animate-spin">
                    </Image>
                    <p className="text-sm text-muted-foreground">Tailwind</p>
                </div>
            </div>
        </div>
    </Reveal>
    {/* Backend */}
    <Reveal
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
    >
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Backend & Database
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">

                {/* Spring Boot */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#8bc34a" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">Spring Boot</p>
                </div>
                {/* MySQL */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="hover:animate-spin">
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M31.16797,8c-0.46875,-0.01172 -0.87891,0.16797 -1.08984,0.6875c-0.35937,0.87109 0.53516,1.72266 0.85547,2.16797c0.22266,0.30859 0.51172,0.65625 0.67188,1.00391c0.10547,0.23047 0.12109,0.46094 0.21094,0.70313c0.22266,0.59766 0.57813,1.27734 0.86328,1.83203c0.14453,0.28125 0.30469,0.57422 0.48828,0.82422c0.11328,0.15234 0.30469,0.22266 0.33594,0.45703c-0.1875,0.26563 -0.19922,0.67578 -0.30469,1.01172c-0.47656,1.50391 -0.29687,3.375 0.39453,4.48438c0.21484,0.34375 0.71875,1.07422 1.40625,0.79688c0.60156,-0.24609 0.46875,-1.00781 0.64063,-1.68359c0.03906,-0.14844 0.01563,-0.26172 0.09375,-0.36328v0.03125c0.17969,0.36719 0.36328,0.73438 0.54688,1.09766c0.41016,0.65625 1.13281,1.33984 1.74219,1.80469c0.31641,0.23828 0.56641,0.65234 0.97656,0.79297v-0.03125h-0.03125c-0.07812,-0.125 -0.20312,-0.17578 -0.30469,-0.27344c-0.23828,-0.23437 -0.50391,-0.52734 -0.69922,-0.79687c-0.55859,-0.75391 -1.05078,-1.58203 -1.49609,-2.44141c-0.21484,-0.41016 -0.40234,-0.86328 -0.58203,-1.28125c-0.07031,-0.16406 -0.07031,-0.40625 -0.21484,-0.49219c-0.19922,0.30859 -0.48828,0.55469 -0.64062,0.91797c-0.24219,0.57813 -0.27734,1.28516 -0.36719,2.01563c-0.05469,0.01953 -0.03125,0.00391 -0.05859,0.03125c-0.42578,-0.10547 -0.57812,-0.54297 -0.73437,-0.91797c-0.39844,-0.94922 -0.47656,-2.48047 -0.12109,-3.57031c0.08984,-0.28516 0.5,-1.17578 0.33594,-1.4375c-0.07812,-0.26172 -0.34375,-0.41016 -0.48828,-0.60937c-0.18359,-0.24609 -0.36328,-0.57031 -0.48828,-0.85547c-0.32812,-0.74219 -0.63672,-1.60156 -0.98437,-2.35156c-0.16406,-0.35937 -0.44141,-0.71875 -0.67187,-1.03906c-0.25391,-0.35156 -0.53516,-0.60937 -0.73437,-1.03906c-0.06641,-0.14844 -0.16406,-0.39062 -0.05859,-0.54687c0.03125,-0.10547 0.07813,-0.14844 0.18359,-0.18359c0.17578,-0.13672 0.66797,0.04297 0.85547,0.12109c0.48828,0.20313 0.89844,0.39844 1.3125,0.67188c0.19922,0.13281 0.39844,0.38672 0.64063,0.46094h0.27344c0.43359,0.09766 0.91406,0.02734 1.3125,0.15234c0.71094,0.21484 1.34766,0.55078 1.92188,0.91406c1.76172,1.10938 3.20313,2.69141 4.18359,4.57813c0.16016,0.30469 0.23047,0.59766 0.37109,0.91797c0.27734,0.64844 0.63281,1.32031 0.91406,1.95313c0.27734,0.63672 0.55078,1.27344 0.94531,1.80078c0.20703,0.27734 1.01172,0.42969 1.375,0.58203c0.25391,0.10938 0.67578,0.22266 0.91406,0.36719c0.46484,0.27734 0.91016,0.60938 1.34375,0.91797c0.21875,0.15234 0.88281,0.48438 0.91797,0.76172c-1.07422,-0.02734 -1.89453,0.07031 -2.59375,0.36719c-0.19922,0.08594 -0.51953,0.08594 -0.55078,0.33594c0.10547,0.11328 0.125,0.28516 0.21094,0.42578c0.16797,0.26953 0.44922,0.63281 0.70313,0.82422c0.27734,0.20703 0.55859,0.42969 0.85547,0.61328c0.52344,0.31641 1.10938,0.5 1.61719,0.82031c0.29688,0.19141 0.59766,0.42969 0.88672,0.64063c0.14453,0.10938 0.23828,0.27344 0.42578,0.33984v-0.03125c-0.09766,-0.125 -0.12109,-0.29687 -0.21094,-0.42578l-0.40234,-0.40234c-0.38672,-0.51172 -0.87891,-0.96484 -1.40234,-1.33984c-0.41797,-0.30078 -1.35156,-0.70703 -1.52344,-1.19141l-0.03125,-0.03125c0.29297,-0.03125 0.64063,-0.14062 0.91406,-0.21484c0.46094,-0.12109 0.86719,-0.08984 1.33984,-0.21094c0.21484,-0.0625 0.42969,-0.125 0.64453,-0.18359v-0.125c-0.23828,-0.24219 -0.41016,-0.57031 -0.67187,-0.79297c-0.68359,-0.58203 -1.42969,-1.16406 -2.19922,-1.64844c-0.42578,-0.26953 -0.95312,-0.44531 -1.40234,-0.67187c-0.15234,-0.07812 -0.41797,-0.11719 -0.51953,-0.24609c-0.23828,-0.30078 -0.36719,-0.68359 -0.55078,-1.03516c-0.38281,-0.73828 -0.75781,-1.54297 -1.09766,-2.32031c-0.23047,-0.52734 -0.38281,-1.05078 -0.67187,-1.52734c-1.38672,-2.27734 -2.87891,-3.65625 -5.19141,-5.00781c-0.49219,-0.28906 -1.08203,-0.39844 -1.70703,-0.54687c-0.33984,-0.02344 -0.67187,-0.04297 -1.01172,-0.0625c-0.20312,-0.08594 -0.41797,-0.33594 -0.60937,-0.46094c-0.48047,-0.30078 -1.42578,-0.82422 -2.20703,-0.83594zM34.47656,11.3125c-0.22266,-0.00391 -0.38281,0.02734 -0.55078,0.0625v0.03125h0.03125c0.10547,0.21875 0.29688,0.35938 0.42969,0.54688c0.10156,0.21484 0.19922,0.42969 0.30078,0.64453l0.03125,-0.03125c0.1875,-0.13281 0.27734,-0.34766 0.27734,-0.67187c-0.07812,-0.07812 -0.08984,-0.17969 -0.15234,-0.27344c-0.08984,-0.12891 -0.25781,-0.19922 -0.36719,-0.30859zM1.86719,23.99609c-0.30078,0.01172 -0.62891,0.07031 -0.98438,0.18359c-0.59375,0.17969 -0.88672,0.53516 -0.88672,1.25781v7.5625h2.00391v-7.37891l2.77734,6.30859c0.34375,0.78516 0.8125,1.06641 1.73047,1.06641c0.92188,0 1.37109,-0.28125 1.71484,-1.06641l2.77734,-6.14844v7.21875h2v-7.5625c0,-0.72266 -0.28906,-1.07812 -0.88672,-1.25781c-1.42187,-0.44922 -2.37891,-0.0625 -2.80859,0.91016l-2.85156,6.41406l-2.75781,-6.41406c-0.3125,-0.73047 -0.9375,-1.12891 -1.82812,-1.09375zM26.24609,24c-0.78906,0 -3.24609,0.09375 -3.24609,2v1.23438c0,0.875 0.76953,1.58984 2.4375,1.76563c0.1875,0.01172 0.375,0.02734 0.5625,0.02734c0,0 1.94531,-0.03906 2,-0.02734c1.125,0 1,0.875 1,1v1c0,0.13672 -0.03125,1 -1.01172,1h-4.98828v1h5.00781c0.65625,0 1.29297,-0.13672 1.80078,-0.375c0.84375,-0.38672 1.19141,-0.91016 1.19141,-1.59766v-1.42969c0,-1.53516 -1.90625,-1.59766 -3,-1.59766h-2c-0.78516,0 -0.90625,-0.47656 -1,-1v-1c0.09375,-0.39844 0.26953,-0.9375 0.96484,-1h5.03516v-1zM33.98047,24c-1.47656,0.20313 -1.99609,0.9375 -1.99609,2v5c0,0.97266 0.54297,1.55859 1.66016,1.86328c0.375,0.10547 0.71484,0.14844 1.03516,0.14844l2.22656,-0.01172h1.30859l1.11328,1h2.25l-1.54687,-1.39453c0.72656,-0.30078 0.95313,-0.76172 0.95313,-1.625v-4.98047c0,-1.0625 -0.69141,-1.79687 -2.16797,-2zM42,24v6.95703c0,1.20703 0.68359,1.88672 2.49219,2.02344c0.16797,0.00781 0.33984,0.01953 0.50781,0.01953h5v-1h-4.62109c-1.03125,0 -1.37891,-0.43359 -1.37891,-1.05078v-6.94922zM35.17188,25h2.57422c0.67969,0 1.13672,0.54688 1.23828,1c0,0 0.01563,4.65625 0.01563,5c0,0.34375 -0.19141,0.5 -0.19141,0.5l-0.54297,-0.5h-2.26562l1.11328,1h-1.94141c-0.69531,0 -1.08594,-0.51562 -1.1875,-1v-4.89844c0,-0.53125 0.40625,-1.10156 1.1875,-1.10156zM14,27c0.03906,0.03906 0,4.26172 0,4.34375c0.01563,0.875 1.125,1.64063 2.86328,1.65625h3.13672v0.06641c0,0.1875 0.13672,0.8125 -1,0.93359c-0.01172,0 -4.98828,0 -5,0v1h5.21484c0.88281,-0.02734 2.79688,-0.22656 2.78516,-1.75781c0,-0.02734 0.00781,-6.24219 0,-6.24219h-2v5c-0.03125,0 -2.47656,0.00781 -2.96875,0c-0.96484,-0.01562 -1.04687,-0.56641 -1.03125,-0.77734v-4.22266z"></path></g></g>
                    </svg>
                    <p className="text-sm text-muted-foreground">MySQL</p>
                </div>
            </div>
        </div>
    </Reveal>

    {/* Tools */}
    <Reveal
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
    >
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Tools
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {/* Git */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">Git</p>
                </div>

                {/* Figma */}
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="hover:animate-spin">
                        <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                    </svg>
                    <p className="text-sm text-muted-foreground">Figma</p>
                </div>
                
            </div>
        </div>
    </Reveal>
</div>
</section>
)
}