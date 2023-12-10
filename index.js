const express=require('express');
const mongoose=require('mongoose');
const path=require('path');

//setting the app
const app=express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const connected=mongoose.connect('mongodb://127.0.0.1:27017/MoneyTracker');

//checking the database connection
connected.then(() => {
    console.log("Connected to the Database");
})
  .catch(() => {
    console.log("Database Connection Failed");
});

const schema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
});

const model = new mongoose.model("Transaction", schema, "Transaction");

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.post('/transaction', async (req, res) => {
    try {
        const data = {
            description: req.body.description,
            amount: req.body.amount,
        };

        await model.create(data);
        res.status(200).send('Transaction Added Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//listening in the port 8000
app.listen('8000',(req,res) => {
    console.log('Listening on the port 8000');
})