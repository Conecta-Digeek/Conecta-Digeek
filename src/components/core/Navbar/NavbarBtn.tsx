import React from "react";

interface Props {
    children: React.ReactNode
}

const NavbarBtn = ({children}: Props) =>{
    return(
        <button className=" bg-white py-2 px-5  hover:drop-shadow-xl duration-100 rounded uppercase text-sm">
            {children}
        </button>
    );
}

export default NavbarBtn