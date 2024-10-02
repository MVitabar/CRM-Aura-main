/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import productsIcon from "../../assets/icons/Shopping-bag.svg";
import statisticsIcon from "../../assets/icons/Brand-google-analytics.svg";
import inboxIcon from "../../assets/icons/File.svg";
import { ButtonDefault } from "../buttonsNew/ButtonsSecondary";
import Plus from "../../assets/icons/Plus.svg?react"

interface SideBarProps {
  onAddProduct: () => void;
  setCurrentView: (view: string) => void; // Nueva prop para cambiar la vista
  isOpen: boolean; // New prop to track sidebar's visibility
  toggleSidebar: () => void; // New prop to toggle sidebar's visibility
  className: string; // New prop to add custom class names
}

const SideBar: React.FC<SideBarProps> = ({
  onAddProduct,
  setCurrentView,
  isOpen,
}) => {
  return (
    <aside
      className={`fixed left-0 top-[60px] w-[250px] h-[calc(100vh-60px)] bg-white shadow-lg overflow-y-auto z-10 ${isOpen ? "block" : "hidden md:block"
        }`}
    >
      <div className="flex flex-col p-4">

        <ButtonDefault onClick={onAddProduct}>
          <span>Añadir producto</span>
          <span><Plus strokeWidth={1.5}/></span>
        </ButtonDefault>

        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setCurrentView("products")} // Cambia la vista al hacer clic
                className="flex items-center py-2 px-4 bg-purple-100 rounded-md text-purple-600 w-full text-left"
              >
                <img
                  src={productsIcon}
                  alt="Productos"
                  className="w-6 h-6 mr-3 opacity-50"
                />
                <span>Tus productos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("statistics")}
                className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md w-full text-left"
              >
                <img
                  src={statisticsIcon}
                  alt="Estadísticas"
                  className="w-6 h-6 mr-3 opacity-50"
                />
                <span>Analíticas</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("events")}
                className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md w-full text-left"
              >
                <img
                  src={inboxIcon}
                  alt="Gestor de Eventos"
                  className="w-6 h-6 mr-3 opacity-50"
                />
                <span>Gestor de Eventos</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
