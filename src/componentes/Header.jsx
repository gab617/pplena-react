
// eslint-disable-next-line react/prop-types
export function Header({ restartLocal, crearStringParaEnviar }) {
    return (
        <>
            <div className='header-buttons navbar-problem' >
                <div id='buttons'>
                    <button className='interactive-button' onClick={restartLocal}>REINICIAR</button>
                    <button className='interactive-button' onClick={crearStringParaEnviar}>Crear mensaje</button>
                </div>
                <div id='links-categorias'>
                    <div id="categorias-top">
                        <a id='a-almacen' href="#Almacen-ul">Almacen</a>
                        <a id='a-verduleria' href="#Verduleria-ul">Verduleria</a>
                        <a id='a-condimentos' href="#Condimentos-ul">Condimentos</a>
                    </div>

                    <div id='links-categorias2'>
                        <a id='a-farmacia' href="#Farmacia-ul">Farmacia</a>
                        <a id='a-otros' href="#Otros-ul">Otros</a>
                    </div>

                </div>
            </div>
        </>
    )
}
