import { Layout, Menu, Button } from "antd";
import { signOut, useSession } from "next-auth/react";
const { Header } = Layout;
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {/* //! conditional rendering using logical and */}
        {!session?.user && (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}

        {session?.user && (
          <items>
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </items>
        )}
        {/* //! conditional rendering using logical and */}
        {/* {session?.user ? (
          <items>
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </items>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )} */}
      </Menu>
    </Header>
  );
};
export default Navbar;
