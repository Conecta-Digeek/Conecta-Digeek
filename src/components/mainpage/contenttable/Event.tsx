const Event = () => {
  return (
    <div className="flex items-center gap-4 border-t-[1px] border-black p-4">
      <div className="h-44 w-1/4 border-2">
        <img
          src={
            "https://www.cetys.mx/noticias/wp-content/uploads/2018/10/21272224_1360308834066977_1724452006629436259_n.jpg"
          }
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-3/4 flex-col justify-center gap-5 ">
        <div>
          <h1 className="text-xl font-bold font-normal">Titulo del evento</h1>
          <h2 className="text-lg text-gray-500">21 de enero del 2022</h2>
        </div>
        <div className="w-1/2">
          <p className="text-justify text-sm">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et
            dolorem corrupti ipsa, fuga accusamus pariatur eos saepe. Quisquam
            doloremque nobis voluptatum, rem impedit officiis modi est. Iusto,
            exercitationem id!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
