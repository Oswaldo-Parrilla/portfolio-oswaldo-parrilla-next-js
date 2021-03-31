import Layaout from '../componets/Layaout';
import {projects} from '../profile'
import Link from 'next/link';

const proje = () => (  
        <Layaout>
            <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Proyectos & Cursos</h1>
                        </div>
                        {
                            projects.map(({name, description, image, link}, index) => (
                                <div className="col-md-4 p-2" key={index}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top"/>
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href={link}>
                                                <a className="btn btn-primary">Saber mas</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/">
                            <a className="btn btn-outline-light">Portafolio</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>     
        </Layaout>     
)

export default proje;