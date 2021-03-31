/*Contiene todas las partes fuera del body, la configuracion de toda la app*/
import 'bootswatch/dist/cosmo/bootstrap.css'
import '../public/styles.css'
import '../global.css'


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;