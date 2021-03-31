import Link from 'next/link';
import Layaout from '../componets/Layaout';
import {skills, exp, project} from '../profile';
import Contratame from './contratame';

const Index = () => (
    <Layaout>
        {/*HEADER CARD*/}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="oswal.jpeg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Oswaldo Parrilla</h1>
                            <h3>Ing. Informatica</h3>
                            <p>Estudiante Activo de Ing. Informática con 3 años y
                                medio de experiencia en Sistemas TI como practicante
                                durante la carrera, gusto por los retos, interesado y
                                apasionado por la programación, con la intención de
                                encontrar una oportunidad laboral en la que pueda
                                desarrollarme en esta área para desempeñarme,
                                profesional y personal, soy autodidacta responsable y
                                muy paciente.
                            </p>
                            <Link href="/contratame">
                                <a>Contratame</a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/*Second section*/}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-ligth">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({skill, percentage}, indice) => (
                                <div className="py-3" key={indice}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{ width: `${percentage}%` }}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-ligth">
                    <div className="card-body">
                        <h1>Experiencia</h1>
                        <ul>
                            {
                                exp.map(({title, description, from, to}, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/exp">
                            <a className="btn btn-primary">Saber Mas</a>
                        </Link>
                    </div>
                </div>
            </div>        
        </div>
        
        {/*Portfolio*/}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Proyectos</h1>
                        </div>
                        {
                            project.map(({name, description, image, link}, index) => (
                                <div className="col-md-4 p-2" key={index}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top"/>
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href='#!'>
                                                <a className="btn btn-primary">Saber Mas</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/projects">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layaout>
)

const MyApp = () => (
    <div>
        <custom404/>
    </div>
)

const MyAppp = () => (
    <Contratame/>
)

export default Index;


                                        //     <li type="circle">
                                        //     Instalación de programas para el área de imagen odontología (Radiovisografos).
                                        // </li>
                                        // <li type="circle">
                                        //     Instalación de Sistemas Operativos (Remoto).
                                        // </li>
                                        // <li type="circle">
                                        //     Respaldo de información.
                                        // </li>
                                        // <li type="circle">
                                        // Instalación de Software (Remoto).
                                        // </li>