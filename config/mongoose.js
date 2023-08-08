// requiring the library of mongoose
const mongoose = require('mongoose');

const url = process.env.DB_URL || "mongodb://localhost/user_management_system";
// connecting to db
mongoose.connect(url)
.then(() => console.log('MongoDB Connected', url))
.catch((err) => console.log(err));;
