import React from "react";
import Menu from "../Menu";

function MenuApp(props) {
  return (
    <div className="App">
      {props.data.map(function (menu) {
        return (
          <Menu
            key={menu.menuName}
            menuName={menu.menuName}
            menuItems={menu.menuItems}
          />
        );
      })}
    </div>
  );
}

export default MenuApp;