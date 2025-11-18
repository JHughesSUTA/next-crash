import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav>
      <NavLink label="Home" href="/" />
      <div>
        <NavLink label="Register" href="/register" />
        <NavLink label="Login" href="/login" />
        <NavLink label="Dashboard" href="/dashboard" />
      </div>
    </nav>
  );
};

export default Navigation;
