import { useEffect, useState } from "react";
import Event from "./Event";

const ContentTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const articleType = ["Startups", "Eventos", "ISW"];
  return (
    <div className="rounded bg-gray-100 p-4">
      <div className="flex items-center gap-10">
        <div className="flex gap-2">
          {articleType.map((item) => (
            <button className="w-40 rounded bg-white py-2 uppercase hover:bg-gray-200">
              {item}
            </button>
          ))}
        </div>
        {/* search bar */}
        <div>
          <input
            placeholder="aqui va el input"
            className="w-96 rounded-lg py-2 px-4"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10">
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};

export default ContentTable;
