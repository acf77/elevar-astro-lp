import { useState } from "react";
import { styles } from "./styles";
// import "./hamburger.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <div onClick={handleClick}>
        <div className="bar1-open"></div>
        <div className="bar2-open"></div>
        <div className="bar3-open"></div>
      </div>

      {/* @ts-ignore */}
      <style>{styles({ isOpen })}</style>
    </>
  );
}
