const Article = () => {
  return (
    <div className="w-[500px] rounded border-2 border-gray-100 shadow-lg duration-75 hover:scale-105">
      {/* image */}
      <div className="max-h-40 w-full overflow-hidden rounded object-center">
        <img
          src="https://www.cetys.mx/noticias/wp-content/uploads/2018/10/21272224_1360308834066977_1724452006629436259_n.jpg"
          className=" w-full object-cover"
        />
      </div>
      {/* information */}
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <h2>Nombre de la noticia </h2>
          <p>autor</p>
        </div>
        <p className="text-gray-400">Fecha de la noticia</p>
      </div>
    </div>
  );
};

export default Article;
