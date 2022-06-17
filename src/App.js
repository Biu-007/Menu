import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import menuData from "./data"
function App() {
  const [menu, setMenu] = useState(menuData)
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    let categories = ["all",...new Set(menu.map(item => item.category))]
    setCategories(categories)
  }
  const diffMenu=(category)=>{
    if(category==="all"){return setMenu(menuData)}
    let newMenu = menuData.filter(item=>item.category===category)
    setMenu(newMenu)
  }
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div className="menu">
      <div className="title">
        <h1>Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <Categories categories={categories} diffMenu={diffMenu}></Categories>
      </div>
      <div className="section-center">
        <Menu menu={menu} ></Menu>
      </div>
    </div>
  );
}

export default App;
