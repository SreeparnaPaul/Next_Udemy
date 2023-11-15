import { useRouter } from "next/router"
function BlogPostsPage(){
    const router=useRouter();
    console.log(router.query);
    return(
        <div>
            <h2>This is blog Post Page</h2>
        </div>
    )
}

export default BlogPostsPage