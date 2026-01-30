import FetchData from "./projects/01_data_fetch";
import BlogCard from "./projects/02_blog_card";
import CardUI from "./projects/03_card_ui";
import Products from "./projects/04_products";
import RefExample from "./projects/05_useRef_hook";
import TodoReducer from "./projects/06_todo_reducer";

export const projectMenu = [
  {
    id: "01_data_fetch",
    name: "Data Fetching",
    component: FetchData,
  },
  {
    id: "02_blog_card",
    name: "Blog post",
    component: BlogCard,
  },
  {
    id: "03_card_ui",
    name: "card UI",
    component: CardUI,
  },
  {
    id: "04_products",
    name: "Products",
    component: Products,
  },
  {
    id: "05_useRef_hook",
    name: "useRef Example",
    component: RefExample,
  },
  {
    id: "06_todo_reducer",
    name: "Todo Reducer",
    component: TodoReducer,
  },
];
