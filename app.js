var mongoose = require('mongoose');
var User = require('./model.js');
const express = require("express");
const app = express();
app.use(express.json())
const PORT = 3000
app.listen(PORT, (req, res) => {
   console.log('app running on 3000 port')
})

app.get('/api/users', async (req, res) => {
   await User.find({}, function (err, dbUsers) {
      if (err) throw err;
      console.log(JSON.stringify(dbUsers));
      res.status(200).json({ dbUsers })
   });


})
app.get('/api/users/:id', async (req, res) => {
   await User.find({ id: req.params.id }, function (err, dbUsers) {
      if (err) throw err;
      console.log(JSON.stringify(dbUsers));
      res.json({ dbUsers })


   });

})
app.post('/post', async (req, res) => {
   const { id, name } = req.body;
   const x = await User.create({ id, name })
   res.json({ x })
})
const connection = mongoose.connect(`${process.env.URI}`, function (err) {

   if (err) throw err;

   console.log('Successfully connected');


});
