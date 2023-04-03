import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      name: "Home",
      id: 1,
      path: "/",
    },
    {
      name: "About",
      id: 2,
      path: "/about",
    },
    {
      name: "Services",
      id: 3,
      path: "/services",
    },
    {
      name: "Contact",
      id: 4,
      path: "/contact",
    },
    {
      name: "FAQ",
      id: 5,
      path: "/faq",
    },
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)} className=" cursor-pointer md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>

      <ul className={`md:flex absolute md:static bg-purple-500 py-3 px-2 duration-500 mx-5 md:mx-0 ${open?'top-6':'-top-96'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
