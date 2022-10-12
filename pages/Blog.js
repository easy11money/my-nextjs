import Head from "next/head";
function Blog() {
    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

            </Head>
            <div className="bg-gray-200  pb-20">
                <div className="grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 mx-auto md:grid-cols-3 lg:grid-cols-4">

                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500">Uneed v3 - The best tools of the <br/> internet</h1>
                            <p className="text-lg">Today id like to tell you about the recent lauch of new version of my very first project,Uneed </p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>

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
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500">Dealing with freelance work and indie making</h1>
                            <p className="text-xl py-4"> Making a living by freelancing while doing indie maker projects on the side is not easy.</p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500">How Ive built my website</h1>
                            <p className="text-xl py-4">Explanation of my creative process, and of the technical part.</p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500">Notion Plants Manager V2</h1>
                            <p className="text-xl py-4">An advanced plants manager template with water and fertilizer systems.</p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500">When, Why and How Ive changed my life</h1>
                            <p className="text-xl py-4"> Its been a month since I made the best decision of my life: quit my job to do what I love</p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500">Notion - My Plants manager template</h1>
                            <p className="text-xl py-4">An advanced plants manager template with water and fertilizer systems.</p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 border-4 hover:border-orange-300  cursor-pointer rounded-3xl bg-white">
                        <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                            <h1 className="text-2xl font-bold text-gray-500"> Uneed Frontend - My first side-project</h1>
                            <p className="text-xl py-4">You couldnt miss it for sure, is online! And its even been featured on Product Hunt!</p>
                            <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Read More</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Blog;