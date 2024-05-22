import { useState } from "react";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "Close" : "Menu"}
      </button>
      {menuOpen && (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
};

export default MobileNavbar;
