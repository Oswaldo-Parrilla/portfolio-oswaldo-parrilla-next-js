import Layaout from '../componets/Layaout';
import Link from 'next/link';

const custom404 = () => (        
        <div className="all">
            <div className="box">
                <h2>4<span className="zero"></span>4</h2>
                <p className="parr">Esta pagina no existe. Por favor regresar a
                    <Link href="/">
                        <a> Home </a>
                    </Link>
                    <br></br>Parrilla Chavez Oswaldo
                </p>
            </div> 
        </div>     
)



export default custom404;