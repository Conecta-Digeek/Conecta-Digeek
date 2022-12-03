import { type NextPage } from "next";
import Navbar from "../components/core/Navbar/Navbar";
import TarjetaInfo from "../components/editorDeVistas/Tarjeta";

const editorDeVistas: NextPage = () => {
    return (
        <>
					<Navbar />
					<div className="grid grid-rows-6">
						<div></div>
						<div></div>
						<div></div>
						<div className="row-span-3 flex flex-col">
						</div>
					</div>
					<div className="flex flex-col">
						<TarjetaInfo />
					</div>
        </>
    )
}

export default editorDeVistas;