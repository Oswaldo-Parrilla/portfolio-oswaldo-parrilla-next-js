import Layaout from '../componets/Layaout';
import {posts} from '../profile.js';
import Link from 'next/link';


const PostCard = ({post}) => (
    <div className="col-md-4  p-2 ">
        <div className="card">
            <div className="overflow">
                <img src={post.imageURL} className="card-img-top" ></img>
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                    <button className="btn btn-primary">Leerr</button>
                </Link>
                    
            </div>
        </div>
    </div>
)

const Blog = () => (
    <div dark>
        <Layaout footer={false} title="Mis Intereses" dark>
            <div className="row">
                {
                    posts.map((post, index) => (
                        <PostCard post={post} key={index} />
                        ))
                }
            </div>
        </Layaout>
    </div>
    
)

export default Blog;