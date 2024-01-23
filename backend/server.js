const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the React app
app.use(express.static("public"));

// Connect to MongoDB Atlas
mongoose.connect(
    "mongodb+srv://nsusn-forms-musfiq:uM3eBXJJgg8qensy@nsusn-forms.xmjuata.mongodb.net/test?retryWrites=true&w=majority"
);

// Define Mongoose schema for contact form data
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
});

// Create Mongoose model
const Contact = mongoose.model("Contact", contactSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle contact form submissions
app.post("/contact", async (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    try {
        const contact = await newContact.save();
        return res.status(200).send(contact);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// Route to fetch all contact form submissions
app.get("/api/v1/contact", async (req, res) => {
    try {
        const contacts = await Contact.find({});
        return res.status(200).send(contacts);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// Start the server
app.listen(3000, () => console.log("Server listening on port 3000"));
