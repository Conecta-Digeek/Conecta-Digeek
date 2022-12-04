import Event from "./Event";

const Contenttable = () => {
  const ArticleType = ["starups", "Eventos", "ISW"];
  return (
    <div className="rounded bg-gray-100 p-4">
      <div className="flex gap-2">
        {ArticleType.map((item) => {
          return (
            <button className="w-40 rounded bg-white py-2 uppercase hover:bg-gray-200">
              {item}
            </button>
          );
        })}
      </div>
      <div className="mt-10">
        <Event />
      </div>
    </div>
  );
};

export default Contenttable;
