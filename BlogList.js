

const BlogList = (props) => {
    const title ="Welcome to Main page"
    return ( 
        <div className="create">
            <h2>{title}</h2>
        </div>
     );
    // const blogs = props.blogs
    // const titles = props.title
    // return (  
    //    <div className="blog-list">
    //        <h1>{titles}</h1>
    //       {blogs.map((blog) => (
    //         <div className='blog-preview' key={blog}>
    //             <h2>{blog.title}</h2>
    //             <p>Written By {blog.author}</p> 
    //             {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
    //         </div>
    //     ))}
    //    </div> 
    // );
}
 
export default BlogList;