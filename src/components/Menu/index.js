import React from "react";
import MenuItem from "../MenuItem";

function Menu(props) {
  return (
    <div className="menu">
      <h1>{props.menuName} Menu</h1>

      <div className="menuItems">
        {props.menuItems.map(function (item) {
          return (
            <MenuItem
              key={item.itemId}
              itemId={item.itemId}
              itemPrice={item.itemPrice}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;