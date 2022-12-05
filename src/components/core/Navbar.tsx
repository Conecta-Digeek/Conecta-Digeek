import { isMapIterator } from "util/types";

const Navbar = () => {
  const links = [
    { title: "inicio", link: "" },
    { title: "sobre nosotros", link: "" },
    { title: "log in", link: "" },
    { title: "cetys", link: "" },
  ];
  return (
    <div className="flex w-full  items-center justify-between px-10">
      <div>
        <h1 className="font-bold">CETYS univesidad</h1>
      </div>
      <div className="flex items-center gap-2 py-3">
        {links.map((item) => {
          return (
            <button className=" rounded bg-white py-2 px-5 text-sm uppercase shadow duration-100 hover:drop-shadow-xl">
              {item.title}
            </button>
          );
        })}
        <div className=" rounded border-gray-200">
          <img
            src={
              "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
            }
            className={"h-8 w-8"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
