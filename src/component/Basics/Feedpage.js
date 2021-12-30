import React, { useState } from "react";
import "./style.css";
import Menu from "./Api.js";
import Card from "./Card";
import Navbar from "./Navbar";

const uniqueList = [
  ... new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {

 const [Data, setData] = useState(Menu);
 const [Lists, setLists] = useState(uniqueList);

 const filterItem = (category) => {
    if(category === "All"){
      setData(Menu);
      return;
    }

   const updatedList = Menu.filter((curElem) =>{
     return curElem.category === category;
   } );
   setData(updatedList);
 };

  return(
  <> 
  
    < Navbar filterItem={filterItem} Lists={Lists} />
    < Card Data={Data} />
  </>
  );
};
export default Restaurant;