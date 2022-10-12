function Foot(){
    return(
        <div>
             <div className="flex justify-around items-center bg-orange-300 fixed inset-x-0 bottom-0 flex-wrap">
           <div className="flex items-center gap-4">
            <i className="bi-megaphone bg-black px-3 py-2 text-white rounded-md"/>
            <h1 className="text-lg">Want a website Like this ? Try my Last Project: Griddly.com</h1>
           </div>
           <div className="flex gap-10 items-center justify-center">
            <button className="bg-white px-2 py-2 m-3 rounded-lg">Learn more</button>
            <i className="bi-x-lg text-white cursor-pointer"/>
           </div>
        </div>
        </div>
    )
}
export default Foot