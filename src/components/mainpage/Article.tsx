const Article = () => {
    return(
        <div className="rounded border-2 border-gray-100 shadow-lg w-2/5 max-w-xs">
            {/* image */}
            <div className="w-full rounded overflow-hidden max-h-40">
                <img src="https://www.cetys.mx/noticias/wp-content/uploads/2018/10/21272224_1360308834066977_1724452006629436259_n.jpg" className=" w-full object-contain"/>
            </div>
            {/* information */}
            <div className="p-2">
                <div className="flex justify-between">
                <h2>Nombre de la noticia </h2>
                <p>autor</p>
                </div>
                <p className="text-gray-400">Fecha de la noticia</p>
            </div>
        </div>
    );
}

export default Article