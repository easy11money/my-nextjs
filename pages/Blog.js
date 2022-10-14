import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link"

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const posts = await res.json();
    return {
        props: {
            posts
        }
    };
}


export default function Blog({ posts }) {

    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

            </Head>

            <div className="bg-gray-200  pb-20">


                <div className=" cursor-pointer grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
                    {posts.map((item,index) => (
                        <Link key={item.id}  href={'/Blog/' + item.id}>
                            <div className="col-span-2 row-span-1 border-4 hover:border-orange-300 rounded-3xl bg-white">
                                <div className="p-6 flex flex-col items-start justify-between h-full space-y-4 group">
                                    <h1 className="text-2xl font-bold text-gray-500">{item.title}</h1>
                                    <p className="text-lg">{item.body}</p>
                                    <button className="rounded-full border-4 px-4 py-2 text-orange-300 font-bold border-orange-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white">Edit</button>
                                </div>


                            </div>
                        </Link>
                    ))}



                </div>



            </div>

        </>
    )
}
