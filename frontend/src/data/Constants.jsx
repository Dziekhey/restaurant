import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import barbecue from "../assets/barbecue.jpg";
import kebab from "../assets/kebab.jpg";
import rice1 from "../assets/rice1.jpg";
import rice2 from "../assets/rice2.jpg";
import samosa from "../assets/samosa.jpg";
import soup from "../assets/soup.jpg";

const images = [barbecue, kebab, rice1, rice2, samosa, soup];

const restaurants = [1, 2, 3, 4, 5, 6, 7, 8];

const status = [
  { value: "Open", label: "Open" },
  { value: "Closed", label: "Closed" },
];

const categories = [
  "All",
  "Seafood",
  "Barbecue and Grilling",
  "Desserts and Sweets",
  "Breakfast and Brunch",
  "Street Food",
  "Gourmet and Fine Dining",
];

const menus = [9, 10, 11, 12];

const ingredients = [
  {
    category: "Protein",
    items: ["Fish", "Egg", "Chicken"],
  },
  {
    category: "Protein",
    items: ["Fish", "Egg", "Chicken"],
  },
  {
    category: "Protein",
    items: ["Fish", "Egg", "Chicken"],
  },
  {
    category: "Protein",
    items: ["Fish", "Egg", "Chicken"],
  },
];

const wantedIngredients = ["Fish", "Egg", "Pepper"];

const cartOrders = [1, 2];

const navigations = [
  // {
  //     title:'Cart',
  //     icon: <ShoppingCartIcon />
  // },
  {
    title: "favorites",
    icon: <FavoriteIcon />,
  },
  {
    title: "Orders",
    icon: <ShoppingBagIcon />,
  },
  // {
  //   title: "Events",
  //   icon: <EventIcon />,
  // },
  // {
  //   title: "Notifications",
  //   icon: <NotificationsIcon />,
  // },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

const orders = [1, 2, 3];

const favorites = [1, 2, 3];

const events = [1, 2, 3];

const adminMenus = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    title: "Orders",
    icon: <ShoppingBagIcon />,
    path: "/orders",
  },
  {
    title: "Menu",
    icon: <ShopTwoIcon />,
    path: "/menu",
  },
  // {
  //   title: "Events",
  //   icon: <EventIcon />,
  //   path: "/events",
  // },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    path: "/",
  },
];

export {
  restaurants,
  categories,
  menus,
  ingredients,
  wantedIngredients,
  cartOrders,
  navigations,
  orders,
  favorites,
  events,
  adminMenus,
  images,
  status,
};
