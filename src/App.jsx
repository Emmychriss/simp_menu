import { useState } from "react";
import Title from "./Title";
import menuData from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const itemCategories = menuData.map((item) => item.category);
const itemCategoriesSet = new Set(itemCategories);
const allCategories = ["all", ...itemCategoriesSet];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menuData);
      return;
    }

    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text={"Our menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
