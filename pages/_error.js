import Layaout from '../componets/Layaout';

const _error = () => {
    return (
        <Layaout>
            {
                statusCode ? (
                    <p className="text-center">No se pudo cargar la pagina {statusCode}</p>
                ) : <p>Cound not get this page</p>
            }   
        </Layaout>
    )
}


export default _error;