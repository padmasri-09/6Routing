import { useState } from 'react'
import BlogList from './BlogList';


const Home = () => {

    const [blogs,setBlogs] = useState([
        {title: 'My new website',body:'lorem ipsum...',author:'mario',id:1},
        {title: 'Welcome party',body:'lorem ipsum...',author:'yoshi',id:2},
        {title: 'Web development',body:'lorem ipsum...',author:'mario',id:3},
    ])
    //let name = "kiran"
    // const [name,setName] = useState('kiran')
    // const handleClick = () => {
    //     setName('akash')
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name)
    // }
    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs"/>
        </div> 
     )
}
 
export default Home;