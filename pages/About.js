import Head from "next/head"
import Img from "next/image"
function About() {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

            </Head>
            <div className="bg-gray-200 pb-20">
                <div className="grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
                    <div className="rounded-3xl">

                        <div className="flex flex-col  text-center space-y-6 cursor-pointer">
                            <div className="flex gap-5">
                                <p className="hover:shadow-lg text-4xl text-orange-300 font-bold  py-6 px-6 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl">27<p className="text-sm pt-2 text-gray-500 w-16">years old</p></p>
                                <p className="hover:shadow-lg text-4xl text-orange-300 font-bold  py-6 px-6 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl">200<p className="text-sm pt-2 text-gray-500">commits/y</p></p>

                            </div>
                            <div className="flex gap-5">
                                <p className="hover:shadow-lg text-4xl text-orange-300 font-bold  py-4 px-6 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl">34<p className="text-sm pt-2 text-gray-500 w-16">plants</p></p>
                                <p className="hover:shadow-lg text-4xl text-orange-300 font-bold  py-4 px-6 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl">1<p className="text-sm pt-2 text-gray-500">French bulldog</p></p>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
                        <div className="p-6">
                        <div className="ml-40">
                <Img src="/image/3.png" alt="logo" width="200px" height="150px" />
                </div>                            <p className="mt-4 text-1xlg text-center">Hello 👋 ! I m<strong className="font-bold text-orange-300 text-3xl">Thomas</strong>  a freelance developer and indie maker from France  I work with Vue  Tailwind  Figma  and a laptop  Oh and Im very funny </p>
                        </div>
                    </div>
                    <div className="flex flex-col  text-center space-y-6 cursor-pointer">
                        <div className="flex gap-5">
                            <i className="bi-twitter text-6xl hover:text-orange-300 text-gray-400  py-7 px-7 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                            <i className="bi-github text-6xl hover:text-orange-400 text-gray-400  py-7 px-7 text-center cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                        </div>
                        <div className="flex gap-5">
                            <i className="bi-envelope text-6xl hover:text-orange-400 text-gray-400  py-7 px-7 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                            <i className="bi-linkedin text-6xl hover:text-orange-400 text-gray-400  py-7 px-7 text-center cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                        </div>
                    </div>
                    <div className="hover:shadow-lg col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
                        <div className="p-6">
                            <div>
                                <p className="text-gray-500 text-3xl font-bold">More about me</p><br />
                                <p className=" text-lg pb-3">My name is Thomas  but my friends call me <strong className="text-orange-300">Toto </strong></p>

                                <p className="text-lg pb-3">I live in <strong className="text-orange-300">Nantes </strong> and I will be very happy to meet you if you live nearby!</p>

                                <p className="text-lg">I split my time between freelancing  indie making  badminton  and my friends </p><br />

                                <p className="text-lg">My dream is to be able to live from my personal projects on the internet! My two main projects are <strong className="text-orange-300 font-bold underline">griddely com</strong> and <strong className="text-orange-300 font-bold underline">Uneed best</strong></p></div>
                        </div>
                    </div>
                    <div className="hover:shadow-lg col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
                        <div className="p-6">
                            <div>
                                <p className="text-gray-500 text-3xl font-bold">My skills and tools</p><br />
                                <p className=" text-lg pb-3">I develop mainly in <strong className="text-orange-300">JavaScript </strong>  and <strong className="text-orange-300">Typescript </strong>   with <strong className="text-orange-300">VueJS  NuxtJS</strong> and <strong className="text-orange-300">TailwindCSS </strong></p>

                                <p className="text-lg pb-3">I <strong className="text-orange-300">design</strong> my projects myself  with <strong className="text-orange-300">Figma </strong></p>

                                <p className="text-lg">I write E2E and integration tests with <strong className="text-orange-300">Cypress </strong> while developing my components with <strong className="text-orange-300">Storybook </strong> I also use <strong className="text-orange-300">AVA</strong> or <strong className="text-orange-300">Jest</strong> for unit testing </p><br />

                                <p className="text-lg">I also handle the backend with <strong className="text-orange-300"> Strapi  Firebase  Supabase </strong> or <strong className="text-orange-300">Express </strong></p>
                                <p className="text-lg">I sometimes do python </p>
                                <p className="text-lg">Ive also worked on <strong className="text-orange-300">form validation  two factors authentication  permissions systems  custom component libraries </strong> and lots of other fun stuff!</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;