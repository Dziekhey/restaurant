import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import barbecue from "../assets/barbecue.jpg";
import kebab from "../assets/kebab.jpg";
import rice1 from "../assets/rice1.jpg";
import rice2 from "../assets/rice2.jpg";
import samosa from "../assets/samosa.jpg";
import soup from "../assets/soup.jpg";
import grand from '../assets/events/grand.jpg';
import cocktail from '../assets/events/cocktail.jpg';
import family from '../assets/events/family.jpg';
import happy from '../assets/events/happy.jpg';
import taco from '../assets/events/taco.jpg';
import weekend from '../assets/events/weekend.jpg';

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
    title: "Profile",
    icon: <PersonIcon />,
  },
  {
    title: "Orders",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "Browse Restaurants",
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
  // {
  //   title: "Logout",
  //   icon: <LogoutIcon />,
  // },
];

const orders = [1, 2, 3];

const favorites = [1, 2, 3];

const events = [
  {
    image: grand,
    name: 'Grand Opening Celebration',
    description: 'Join us for our grand opening celebration and enjoy 50% off on your first order!',
    start: '2024-Apr-20',
    end: '2024-Apr-22',
    restaurant: 'Delicious Delights'
  },
  {
    image: happy,
    name: 'Happy Hour Specials',
    description: 'Unwind with our happy hour specials every weekday from 4 PM to 6 PM!',
    start: '2024-Jan-01',
    end: '2024-Dec-31',
    restaurant: 'Sip & Savor Lounge'
  },
  {
    image: weekend,
    name: 'Weekend Brunch Bonanza',
    description: 'Indulge in our delicious weekend brunch menu and get a complimentary dessert with every brunch order.',
    start: '2024-May-01',
    end: '2024-May-31',
    restaurant: 'Brunch Bistro'
  },
  {
    image: taco,
    name: 'Taco Tuesdays',
    description: 'Spice up your Tuesdays with our Taco Tuesdays special. Buy one taco, get one free!',
    start: '2024-Jan-01',
    end: '2024-Dec-31',
    restaurant: 'Taco Haven'
  },
  {
    image: family,
    name: 'Family Dinner Deal',
    description: 'Treat your family to a special dinner with our family dinner deal. Get 20% off on orders over $50!',
    start: '2024-June-01',
    end: '2024-June-30',
    restaurant: 'Family Feast Restaurant'
  },
  {
    image: cocktail,
    name: 'Cocktail Mixology Class',
    description: 'Join us for a fun-filled cocktail mixology class and learn how to craft your favorite cocktails from our expert bartenders!',
    start: '2024-May-15',
    end: '2024-May-15',
    restaurant: 'Mix & Mingle Bar'
  }
];



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
