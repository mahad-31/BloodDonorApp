const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student=require('./models/student');
const app = express();
const PORT = 3001; // Change this to the port you want your server to listen on

app.use(express.json());
app.use(cors());
app.post("/logindata", (req, res) => {
  const { email, password } = req.body;
  Student.findOne( {email: email} )
    .then((student) => {
      if (student.password == password) {
        res.json(  "success");

      }
     else {
       
        res.json("fail");

      }
    }) 
    .catch(err => {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
      });
});


app.post("/loginuser", (req, res) => {
  Student.create(req.body)
    .then((student) => {
      if (student) {
        res.json("success");
        
      } else {
        res.json("fail");
      }
    })
    .catch((err) => res.json(err));
});
app.post("/blood",(req,res)=>{
  Student.find({bloodgroup:req.body.bloodgroup})
  .then(data=>{
      res.json(data);
      console.log(data);
    })
   .catch(err=>{
      res.json(err);
    })
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/login', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with an error code
  });
