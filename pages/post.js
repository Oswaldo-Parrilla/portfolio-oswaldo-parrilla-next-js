import Layout from '../componets/Layaout';
import {useRouter} from 'next/router';
import {postsComplete} from '../profile';

const Post = () => {
    const router = useRouter();
    
    const currentPost = postsComplete.filter(post => post.title === router.query.title)[0]

    console.log(currentPost)
    return (
        <Layout footer={false} title={currentPost.title}>
            <div className="text-center">
                <img src={currentPost.imageURL} className="img-fluid" style={{width: '60%'}}/>
                <p className="text-left font-weight-bold text-uppercase font-italic py-4">{currentPost.content}</p>               
            </div>
        </Layout>
    )
}
    
export default Post;