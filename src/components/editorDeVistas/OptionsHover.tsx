import React, { useState } from 'react';
import Image from "next/image";
import x from "src/utils/editorDeEntradas/icons/x.png";
import pencil from "src/utils/editorDeEntradas/icons/pencil.png";
import view from "src/utils/editorDeEntradas/icons/view.png";

const Options = () => {
    return (
      <div className="absolute top-0 right-0 h-1/4 w-24 border border-black rounded grid grid-cols-3 place-items-center place-content-around mr-0.5 mt-0.5">
				<Image src={view} alt="preview" className="p-0.5 border border-black" />
				<Image src={pencil} alt="preview" className="p-0.5 border border-black" />
				<Image src={x} alt="preview" className="p-0.5 border border-black" />
			</div>
    )
}

export default Options;