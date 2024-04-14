import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';


const restaurants = [1,2,3,4,5,6,7,8]



const categories = ['All', 'Seafood', 'Barbecue and Grilling', 'Desserts and Sweets', 'Breakfast and Brunch', 'Street Food','Gourmet and Fine Dining']



const menus = [9,10,11,12]



const ingredients = [
    {
        category: 'Protein',
        items: ['Fish', 'Egg', 'Chicken']
    },
    {
        category: 'Protein',
        items: ['Fish', 'Egg', 'Chicken']
    },
    {
        category: 'Protein',
        items: ['Fish', 'Egg', 'Chicken']
    },
    {
        category: 'Protein',
        items: ['Fish', 'Egg', 'Chicken']
    }
]



const wantedIngredients = ['Fish', 'Egg', 'Pepper']


const cartOrders = [1,2]



const navigations = [
// {
//     title:'Cart',
//     icon: <ShoppingCartIcon />
// },
{
    title:'favorites',
    icon: <FavoriteIcon />
},
{
    title:'Orders',
    icon: <ShoppingBagIcon />
},
{
    title:'Events',
    icon: <EventIcon />
},
{
    title:'Notifications',
    icon: <NotificationsIcon />
},
{
    title:'Logout',
    icon: <LogoutIcon />
},
]


const orders = [1,2,3]


const favorites = [1,2,3]


const events = [1,2,3]

export {restaurants, categories, menus, ingredients, wantedIngredients, cartOrders, navigations, orders, favorites, events};