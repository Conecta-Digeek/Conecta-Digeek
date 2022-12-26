import NewElementBtn from "./NewElementBtn";
import { useState } from "react";

const TableContent = () => {
  const [elements, setElements] = useState([]);

  return (
    <div className="w-full border-2">
      <h1>Table Content</h1>
      <div className="flex items-center justify-center">
        <NewElementBtn />
      </div>
    </div>
  );
};

export default TableContent;
