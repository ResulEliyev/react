import { createContext, useContext, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DropdownTrigger from "./DropdownTrigger";

const DropdownContect = createContext();
export const useDropdown = () => useContext(DropdownContect);

export default function Dropdown({ children }) {
  const [isOpened, setIsOpened] = useState();
  return (
    <DropdownContect.Provider
      value={{
        isOpened,
        setIsOpened,
      }}
    >
      <div className="w-max relative">{children}</div>
    </DropdownContect.Provider>
  );
}

Dropdown.Menu = DropdownMenu;
Dropdown.Trgger = DropdownTrigger;
