const express = require("express");
const app = express();
app.use(express.json());

// Sample Data
let users = [
    { id: 1, name: "Sindhu", plan: "Premium", status: "Active" },
    { id: 2, name: "John", plan: "Basic", status: "Active" }
];

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Add new subscription
app.post("/subscribe", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        plan: req.body.plan,
        status: "Active"
    };
    users.push(newUser);
    res.json({ message: "Subscription Added!", user: newUser });
});

// Cancel subscription
app.delete("/cancel/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.map(user =>
        user.id === id ? { ...user, status: "Canceled" } : user
    );
    res.json({ message: "Subscription Canceled!" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
