import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Article from "../components/mainpage/Article";
import { signIn, signOut, useSession } from "next-auth/react";
import Contenttable from "../components/mainpage/Contenttable";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <div className="align-center m-auto flex w-3/4 justify-center py-10">
        <img
          src="https://www.cetys.mx/noticias/wp-content/uploads/2018/10/21272224_1360308834066977_1724452006629436259_n.jpg"
          className="max-h-96 object-cover"
        />
      </div>
      <div className="flex justify-center gap-16 px-10">
        <Article />
        <Article />
        <Article />
      </div>
      <Contenttable />
    </>
  );
};

export default Home;
