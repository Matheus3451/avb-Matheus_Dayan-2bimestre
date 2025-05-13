import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Links } from "react-router-dom"

export default function Home() {
    const [posts, setPost] = useState([])
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((res) => setPost(res.data))

    })

    console.log(posts)
    return (
    <>
        <div>
        <h2> lista de Posts </h2>
        <ul>
            {posts.map((post) => (
            <li> key ={post.id}
                <Link to={`/detalhes/${post.id}`}>{post.title} </Link>
            </li>
        ))}</ul>
        </div>
    </>
    );
    }