import Head from "next/head"

function Work() {
    return (
        <>
            <Head>
                <title>Work</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

            </Head>

            <div className="bg-gray-200  pb-20">
                <div className="grid max-w-6xl grid-cols-1 gap-4 px-6 py-6 mx-auto md:grid-cols-3 lg:grid-cols-4">

                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white ">

                        <div className="flex flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                            <h1 className="text-3xl text-gray-500 pt-9">Uneed??</h1>
                            <p className="text-lg text-lg text-black-400"> The best tools of the internet, curated by hand daily.</p>
                            <i className="bi-box-arrow-up-right px-5 py-2  text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>

                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white cursor-pointer">
                        <div className="flex pt-9 flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                            <h1 className="text-3xl text-gray-500">GREEDLY</h1>
                            <p className="text-lg text-lg text-black-400"> A website builder based on cards.</p>
                            <i className="bi-box-arrow-up-right  px-5 py-2 text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white ">

                        <div className="flex relative flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                        <h1 className="float-left absolute top-0 right-0 bg-gray-400 px-8 py-2 rounded-tr-2xl text-white  rounded-bl-3xl">freelance</h1>

                            <h1 className="text-3xl text-gray-500">demo.craxy</h1>
                            <p className="text-lg text-lg text-black-400">Lets just be honest. Lets just be real.</p>
                            <i className="bi-box-arrow-up-right px-5 py-2  text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>

                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white cursor-pointer">
                        <div className="flex relative flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                        <h1 className="float-left absolute top-0 right-0 bg-gray-400 px-8 py-2 rounded-tr-2xl text-white  rounded-bl-3xl">freelance</h1>

                            <h1 className="text-3xl text-gray-500">cocoon space</h1>
                            <p className="text-lg text-lg text-black-400"> A website builder based on cards.</p>
                            <i className="bi-box-arrow-up-right  px-5 py-2 text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white ">

                        <div className="flex pt-12 flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                            <h1 className="text-3xl text-gray-500">Scribe</h1>
                            <p className="text-lg text-lg text-black-400">The laboratory of your writings</p>
                            <i className="bi-box-arrow-up-right px-5 py-2  text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>

                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white cursor-pointer">
                        <div className="flex pt-12 flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                            <h1 className="text-3xl text-gray-500">GREEDLY</h1>
                            <p className="text-lg text-lg text-black-400"> A website builder based on cards.</p>
                            <i className="bi-box-arrow-up-right  px-5 py-2 text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white ">

                        <div className="flex pt-12 flex-col items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                            <h1 className="text-3xl text-gray-500">FREEESBY</h1>
                            <p className="text-lg text-lg text-black-400">Feedback exchange platform</p>
                            <i className="bi-box-arrow-up-right px-5 py-2  text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>

                    </div>
                    <div className="col-span-1 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white cursor-pointer">
                        <div className="flex flex-col pt-12 items-center justify-center h-full py-4 px-4 text-center space-y-6 cursor-pointer">
                            <i className="bi-flower1 text-3xl text-red-500"/>
                            <p className="text-lg text-lg text-black-400"> A website builder based on cards.</p>
                            <i className="bi-box-arrow-up-right  px-5 py-2 text-orange-500  border-2 border-orange-400 hover:border-gray-500 rounded-3xl hover:bg-gray-500 hover:text-white" />
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default Work;