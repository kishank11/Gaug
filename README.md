# MongoDB-connection-using-Mongoose-and-Node-JS

1.Download the Clone.
npm install

2.Create User.js
# define the Schema
      // create a schema
      var userSchema = new Schema({
        name: {
              firstName: {
                  type: String,
                  required: true
              },
              lastName: String
          }
      });
 
# Create Model
      var User = mongoose.model('User', userSchema);

# Export the Model
      module.exports = User;

# Create app.js
      var mongoose = require('mongoose');
      var User = require('./model.js');

# Connect the MongoDB
        mongoose.connect('mongodb://localhost/testDB', function (err) {
          if (err) throw err;
          console.log('Successfully connected');
        })
  
# Final code
        mongoose.connect('mongodb://localhost/testDB', function (err) {
           if (err) throw err;
           console.log('Successfully connected');
           
           // Create User Obiect 
            var UserObject = new User({
                name: {
                  firstName: 'Sample',
                  lastName: 'Example'
                }
             });
             
           //Save the document into User table.
           UserObject.save(function(err){
            if (err) throw err;
           })
           
           //Find the all user in User table.
           User.find({}, function(err, dbUsers){
            if (err) throw err;
              console.log(JSON.stringify(dbUsers));
           });
           
        });
  
