import React from "react";

const Header = () => {
  return (
    <header className="h-[65px] flex items-center justify-end border-b pr-5">
      <div className="flex items-center gap-1">
        <span>Welcome back,</span>
        <span className="text-sm">Lâm !</span>
      </div>
    </header>
  );
};

export default Header;
