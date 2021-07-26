const express = require('express');
const app = express();


//*Middleware
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

//*Routes
app.route('/').get((req,res) => {
    res.send("Flutter server Application")
})


//*MongoDB Connection


//*Port
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{ console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`) })