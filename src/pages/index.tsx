import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Article from "../components/mainpage/Article";
import { signIn, signOut, useSession } from "next-auth/react";
import ContentTable from "../components/mainpage/contentTable/ContentTable";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <div className="align-center m-auto flex w-full justify-center">
        <img
          src="https://www.cetys.mx/gsb/wp-content/uploads/2020/05/CetysGSB_Banner-60Aniversario2-scaled.jpg"
          className="max-h-[510px] w-full object-cover"
        />
      </div>
      <div className="mt-10 px-10">
        <div className="flex flex-wrap justify-center gap-10">
          <Article />
          <Article />
          <Article />
        </div>
        {/* cambiar margenes ------------ */}
        <div className="mt-10 mb-10">
          <ContentTable />
        </div>
      </div>
    </>
  );
};

export default Home;
