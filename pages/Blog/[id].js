export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const posts = await res.json();

    const paths = posts.map(item => {
        return {
            params : {id : item.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const postsdata= await res.json();
    return{
        props : {allpost : postsdata}
    }
    
}

function Detail({allpost}) {
    return(
        <div className="bg-gray-200 pb-96">
        <div className="bg-gray-200 border-2 p-4 mx-5  border-orange-200 rounded-lg">
         <h1 className="text-lg underline text-red-500">Post Id:{allpost.id}</h1>
          <h4>Title:{allpost.title}</h4><br/>
          <h4>Body:{allpost.body}</h4>
        </div>
        </div>
    )
}
export default Detail;