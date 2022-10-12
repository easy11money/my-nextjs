import Head from "next/head"
import Img from "next/image"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      </Head>

      <div className="bg-gray-200  pb-20">

        <main>
          <div className="grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
              <div className="p-6 justify-center">
                <div className="mx-40">
                <Img src="/image/3.png" alt="logo" width="200px" height="150px" />
                </div>
                <p className="mt-4 text-lg text-center">Hello 👋 ! Im; Thomas, a freelance developer and indie maker from France. I work with Vue, Tailwind, Figma, and a laptop. Oh and Im very funny.</p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white ">

              <div className="flex flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                <h1>Uneed??</h1>
                <p className="text-lg"> The best tools of the internet, curated by hand daily.</p>
                <i className="bi-box-arrow-up-right px-5 py-4  text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
              </div>

            </div>
            <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white cursor-pointer">
              <div className="bg-orange-500 w-28 h-28 rounded-full mx-auto my-20"></div>
            </div>
            <div className="rounded-3xl">

              <div className="flex flex-col  text-center space-y-6 cursor-pointer">
                <div className="flex gap-5">
                  <i className="bi-twitter text-6xl hover:text-gray-400  py-7 px-7 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                  <i className="bi-github text-6xl hover:text-gray-400 py-7 px-7 text-center cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                </div>
                <div className="flex gap-5">
                  <i className="bi-envelope text-6xl hover:text-gray-400 py-7 px-7 text-center  cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                  <i className="bi-linkedin text-6xl hover:text-gray-400 py-7 px-7 text-center cursor-pointer bg-white border-4 hover:border-orange-300 rounded-3xl" />
                </div>
              </div>

            </div>
            <div className="col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
              <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                <h1 className="text-2xl font-bold text-gray-500">Uneed v3 - The best tools of<br/> the internet</h1>
                <p className="text-lg">Today id like to tell you about the recent lauch of new version of my very first project,Uneed </p>
                <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>

              </div>
            </div>
            <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white ">

              <div className="p-6 flex flex-col items-center justify-center h-full space-y-4 group">
                <h1 className="font-bold text-xl text-gray-400">GRIDDLY</h1>
                <p className="text-lg  text-center">A Website builders based<br/> on the cards.</p>
                <i className="bi-box-arrow-up-right px-5 py-4  text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />

              </div>

            </div>
            <div className="col-span-2 row-span-1 border-4 hover:border-orange-300 cursor-pointer rounded-3xl bg-white">
              <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                <h1 className="text-2xl font-bold text-gray-500 w-80">The toto- Todo method</h1>
                <p className="text-xl py-4">Today id like to tell you about the recent lauch of new version of my very first project,Uneed </p>
                <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>

              </div>
            </div>
            <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
              <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                <h1 className="text-2xl font-bold text-gray-500"> Freeesby: A day to build a project</h1>
                <p className="text-xl py-4">Today id like to tell you about the recent lauch of new version of my very first project,Uneed </p>
                <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
              </div>
            </div>
          </div>
        </main>

      </div>

    </>
  )
}

