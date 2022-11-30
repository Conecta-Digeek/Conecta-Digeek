import NavbarBtn from "./NavbarBtn";

const Navbar = () => {
  return (
    <div className="flex w-full  items-center justify-between bg-gray-100 px-10">
      <div>
        <h1 className="font-bold">CETYS univesidad</h1>
      </div>
      <div className="flex items-center gap-2 py-3">
        <NavbarBtn>inicio</NavbarBtn>
        <NavbarBtn>sobre nosotros</NavbarBtn>
        <NavbarBtn>log in</NavbarBtn>
        <NavbarBtn>cetys</NavbarBtn>
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
