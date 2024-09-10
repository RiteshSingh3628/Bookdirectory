// Database connection
const mongoose = require('mongoosse')
const DB_URI = "mongodb://localhost:27017/bookDirectory"
mongoose.connect(DB_URI)
