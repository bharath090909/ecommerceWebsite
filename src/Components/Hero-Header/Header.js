import React from "react";
import Card from "../../UI/Card";

const Header = () => {
  return (
    <div className="  bg-hero-pattern w-full h-[65vh] bg-no-repeat flex  items-center">
      <Card>
        <div className="text-5xl font-dancingScript leading-tight">
          <h1>Souvenir City</h1>
          <p>Shop till you drop!</p>
        </div>
      </Card>
    </div>
  );
};

export default Header;
