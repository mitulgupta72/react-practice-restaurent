import React from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),"All"
];
// in above ... is spread operator converts set to array of objects 
console.log(uniqueList);

const Restaurent = () => {
  const [menuData, setMenuData] = React.useState(Menu);  //state variable 
  const [menuList, setMenuList] = React.useState(uniqueList);

  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />  {/* in filterItem and nmenuList are props (stands for properties) */}
      <MenuCard menuData={menuData} />  {/*  here Navbar and MenuCard are called components ,components says do not repeat   */}
    </>
  );
};

export default Restaurent;
