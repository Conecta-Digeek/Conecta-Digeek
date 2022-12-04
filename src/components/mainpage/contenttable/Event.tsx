const Event = () => {
  return (
    <div className="flex max-h-52 items-center overflow-hidden border-t-2 bg-white">
      <div className="">
        <img
          src={
            "https://www.cetys.mx/noticias/wp-content/uploads/2018/10/21272224_1360308834066977_1724452006629436259_n.jpg"
          }
        />
      </div>
      <div className=" p-4">
        <div>
          <h1 className="text-2xl font-bold">Titulo del evento</h1>
          <h2 className="text-xl text-gray-500">21 de enero del 2022</h2>
        </div>
        <div className="w-1/2">
          <p>
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
