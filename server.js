const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile')


//* Initializing Application
const app = express();


//*Middleware
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

//*Routes
app.use('/user',authRoutes);
app.use('/profile',profileRoutes)
app.route('/').get((req,res) => {
    res.send("Flutter server Application")
})

//*MongoDB Connection
mongoose.connect(process.env.MONGO || "mongodb://localhost/flutterblog", { useNewUrlParser : true, useFindAndModify : false, useUnifiedTopology : true })
        .then(() => console.log("Mongodb connection successful"))
        .catch(() => console.log("Mongodb connection failure"))

//*Port
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{ console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`) })