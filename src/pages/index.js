import Head from "next/head";
import { useSession } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  console.log("from Home :", user);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome {user?.email} To Next Auth Home Page
      </h1>
    </div>
  );
};

export default HomePage;
