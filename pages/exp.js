import Layaout from '../componets/Layaout';
import {experiences} from '../profile'
import Link from 'next/link';

const exp = () => (
    <Layaout>
        <div className="col-md-12">
                <div className="card bg-ligth">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({title, description, from, to}, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/">
                            <a className="btn btn-primary">Portafolio</a>
                        </Link>
                    </div>
                </div>
            </div>   
    </Layaout>
)

export default exp;