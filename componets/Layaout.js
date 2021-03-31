import Navbarr from './Navbar';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import NProgress from 'nprogress';
//Instalar el modulo para los estilos y sea mas facil poner las propiedades a los div
import Classnames from 'classnames';

const Layaout = ({children, title, footer = true, dark = false}) => {
    const router = useRouter(); //*Llamar la peticion una sola vez, en este caso las pestañas del sitio web y no refresca toda la pagina completa
    
    //*Esto es para el progress en cada recarga de los componentes
    useEffect(() => {
        const handleRouteChange =  url => {
            console.log(url);
            NProgress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange);    
        router.events.on('routeChangeComplete',() => NProgress.done());
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, [])

    return (
        //en cada div con la clase bg-dark seria: Si dark existe coloca la propiedad 'bg-dark' caso contrario  (:), queda vacio
        <div className={Classnames({'bg-dark': dark, 'bg-light': !dark})}> 

            {/*MENU QUE VIENE DEL COMPONETE NAVBAR*/}  
            <Navbarr/> 
            

            {/*MAIN*/}
            <main className="container py-4"> {/*Aqui se establece las medidas del contenedor total con un padding en los 4 lados top, rigth, left bottom*/}
                
                {title &&(
                    <h1 className={Classnames('text-center', {'text-light': dark})}>
                        {title}
                    </h1>
                )}

                {children} {/*Aqui se pasaran elementos de los otros componentes{paginas como /github, /blog etc} */}
            </main>

            {/*FOOTER*/}
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; Oswaldo Parrilla Chavez Porfolio</h1>
                            <p>2017 - {new Date().getFullYear()} </p>
                            <p>All rights Reserverd.</p>
                        </div>
                    </footer>
                )
            }
        </div>
    )
}

export default Layaout;

