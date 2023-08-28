
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Service</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="nav-bg">
      <div className="container mx-auto">
      <div className="navbar nav-bg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link href="/" className=" text-4xl font-bold">
            Indrajit
          </Link>
        </div>
        <div className="navbar-end nav  hidden lg:flex">
          <ul className=" px-1 text-lg ">
           {menuItems}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
