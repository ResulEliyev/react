import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import CartSide from "../ui/sidebar/CartSide";
import { useState } from "react";

export default () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Outlet />
      <CartSide
        isOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};
