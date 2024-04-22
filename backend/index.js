import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import usersRoute from './routes/users.routes.js';
import ownerRoute from './routes/owners.routes.js'
import restaurantRoute from './routes/restaurants.routes.js'
import menuRoute from './routes/menu.routes.js';
import orderRoute from './routes/orders.routes.js';
import cartRoute from './routes/cart.routes.js'

// Create express app
const app = express();


// Use middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cookieParser());
app.use(express.static('uploads'));


// Load routes
app.use('/users', usersRoute);
app.use('/owners', ownerRoute);
app.use('/restaurants', restaurantRoute);
app.use('/menu', menuRoute);
app.use('/orders', orderRoute);
app.use('/carts', cartRoute);





// Make database connection
await mongoose.connect(process.env.MONGO_URI);


// Listen for incoming
const port = process.env.Port || 4000;
app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});