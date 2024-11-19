const mongoose = require('mongoose');

// Replace <username>, <password>, <cluster_name>, and <database_name> with your details
const uri = 'mongodb+srv://<akankshaofficial360>:<akanksha360>@<cluster_name>.mongodb.net/<database_name>?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
