import Link from 'next/link';
import Layaout from '../componets/Layaout';

const Contratame = () => (
    <div className="bod">
        <div className="letras">
            <div className="lightbar"></div>
            <div className="topLayer"></div>
            <h2>Gracias por mirar mi CV :)</h2>
        </div>
        <div className="lawea">
        <p className="parr">Para regresarr a la pagina principal de click 
                    <Link href="/">
                        <a> Aqui </a>
                    </Link>
                    <br></br>Parrilla Chavez Oswaldo
                </p>
        </div>
        
    </div>
    
    
)


export default Contratame;