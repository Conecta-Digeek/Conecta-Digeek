import { useState } from "react";

const NewElementBtn = () => {
  const [state, setState] = useState(false);

  return (
    <>
      {!state ? (
        <div
          className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 duration-75 hover:bg-red-50"
          onClick={() => setState(!state)}
        >
          <h1>+</h1>
        </div>
      ) : (
        <div
          className="flex h-32 w-64 items-center justify-center border-2 duration-75"
          onClick={() => setState(!state)}
        >
          <div className="flex w-full flex-wrap items-center justify-center gap-2">
            <div>A Texto</div>
            <div>Imagen</div>
            <div>Titulo 1</div>
            <div>Titulo 2</div>
            <div>Todo list</div>
            <div>emoji</div>
            <div>table</div>
            <div>W link</div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewElementBtn;
