require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        req.userEmail = decoded.email;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token", error: error.message });
    }
};

// ============ USER AUTHENTICATION ROUTES ============

// Register Route
app.post("/api/auth/register", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
        
        // Validation
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        
        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword
        });
        
        await newUser.save();
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            JWT_SECRET,
            { expiresIn: "7d" }
        );
        
        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone
            }
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
});

// Login Route
app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        
        // Find user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "7d" }
        );
        
        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed", error: error.message });
    }
});

// Get Current User
app.get("/api/auth/me", verifyToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
});

// Logout Route (optional - for client side)
app.post("/api/auth/logout", (req, res) => {
    res.json({ message: "Logout successful" });
});

// ============ HOLDINGS ROUTES (WITH USER FILTERING) ============

app.get("/allHoldings", verifyToken, async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({ userId: req.userId });
        res.json(allHoldings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).json({ message: "Error fetching holdings", error: error.message });
    }
});

app.get("/allPositions", verifyToken, async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        res.status(500).json({ message: "Error fetching positions", error: error.message });
    }
});

// ============ ORDERS ROUTES (WITH USER FILTERING) ============

app.post("/newOrder", verifyToken, async (req, res) => {
    try {
        let newOrder = new OrdersModel({
            userId: req.userId,
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        
        await newOrder.save();
        
        // If it's a BUY order, update holdings
        if (req.body.mode === "Buy") {
            let existingHolding = await HoldingsModel.findOne({ 
                userId: req.userId,
                name: req.body.name 
            });
            
            if (existingHolding) {
                // Update existing holding
                const totalQty = existingHolding.qty + parseInt(req.body.qty);
                const newAvgPrice = (
                    (existingHolding.avg * existingHolding.qty + parseFloat(req.body.price) * parseInt(req.body.qty)) / totalQty
                );
                
                await HoldingsModel.updateOne(
                    { userId: req.userId, name: req.body.name },
                    {
                        qty: totalQty,
                        avg: newAvgPrice,
                        price: req.body.price
                    }
                );
            } else {
                // Create new holding
                let newHolding = new HoldingsModel({
                    userId: req.userId,
                    name: req.body.name,
                    qty: req.body.qty,
                    avg: req.body.price,
                    price: req.body.price,
                    net: "+0.00%",
                    day: "+0.00%"
                });
                await newHolding.save();
            }
        }
        
        res.json({ message: "Order saved!", order: newOrder });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ message: "Error saving order", error: error.message });
    }
});

// Update Holdings After Sell
app.post("/updateHoldings", verifyToken, async (req, res) => {
    try {
        const { name, qtyToRemove } = req.body;
        
        let holding = await HoldingsModel.findOne({ 
            userId: req.userId,
            name: name 
        });
        
        if (!holding) {
            return res.status(404).json({ message: "Holding not found!" });
        }
        
        const newQty = holding.qty - parseInt(qtyToRemove);
        
        if (newQty < 0) {
            return res.status(400).json({ message: "Cannot sell more than available quantity!" });
        }
        
        if (newQty === 0) {
            // Delete holding if quantity becomes 0
            await HoldingsModel.deleteOne({ userId: req.userId, name: name });
            res.json({ message: "Holding sold completely!" });
        } else {
            // Update holding with new quantity
            await HoldingsModel.updateOne(
                { userId: req.userId, name: name },
                { qty: newQty }
            );
            res.json({ message: "Holding updated!" });
        }
    } catch (error) {
        console.error("Error updating holdings:", error);
        res.status(500).json({ message: "Error updating holdings", error: error.message });
    }
});

// Get All Orders for User
app.get("/allOrders", verifyToken, async (req, res) => {
    try {
        let allOrders = await OrdersModel.find({ userId: req.userId });
        res.json(allOrders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}!`);
    mongoose.connect(url);
    console.log("DB Connected Successfully!");
});
