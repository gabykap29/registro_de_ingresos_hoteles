"use client";
import React, { useState } from "react";
interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-slate-800 dark:bg-dark text-white`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-48 max-w-full px-4"> {/* Reducido el ancho del logo */}
            <a href="/#" className="flex items-center w-full py-4 px-6"> {/* Reducido el padding */}
              <img
                src="/iconoBD.png"
                alt="logo"
                className="w-8 h-8 object-cover rounded-sm hidden md:block" 
              />
              <span className="text-xl font-bold ml-3">S.C.H</span> {/* Reducido el tamaño del texto */}
            </a>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`${
                  open && "navbarTogglerActive"
                } absolute left-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-1 ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[4px] block h-[2px] w-[25px] bg-body-color dark:bg-white"></span> {/* Reducido el tamaño del botón */}
                <span className="relative my-[4px] block h-[2px] w-[25px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[4px] block h-[2px] w-[25px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute left-4 top-full w-full max-w-[200px] rounded-lg bg-slate-800 px-4 py-4 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Inicio</ListItem>
                  <ListItem NavLink="/ingresos/carga">Carga</ListItem>
                  <ListItem NavLink="/#">Personas</ListItem>
                  <ListItem NavLink="/#">Filtros</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-12 sm:flex lg:pr-0"> 

              <a
                href="/#"
                className="rounded-md bg-primary px-6 py-2 text-base font-medium text-white hover:bg-primary/90" 
              >
                Iniciar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem: React.FC<ListItemProps> = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-8 lg:inline-flex" 
      >
        {children}
      </a>
    </li>
  );
};
