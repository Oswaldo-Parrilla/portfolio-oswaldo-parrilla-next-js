import Layaout from '../componets/Layaout';
import Error from './_error';
import Err404 from './404';

//Aqui le pasamos la peticion del backend que seria props y esto lo visualizara en el front
const Github = ({user, statusCode}) => {

    if(statusCode) {
        return <Err404/>
    }
    return (
        <Layaout footer={false} dark>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt=""/>
                        <p>{user.bio}</p>
                        {/* <a href={user.blog} target="_blank" className="btn btn-outline-primary my-2">Mi Blog</a> */}
                        <a href={user.html_url} target="_blank" className="btn btn-outline-primary">Ir a Github</a>
                    </div>
                </div>
            </div>
        </Layaout>
    )
}
    

//Pediremos una peticion de servidor y luego pasarlo al front, usamos esta funcion:
export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/Oswaldo-Parrilla')
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;
    return {
        props: {
            user: data,
            statusCode
        }
    }
}
    
export default Github;