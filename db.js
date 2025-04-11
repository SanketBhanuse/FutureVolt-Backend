const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sanket:1234@cluster0.idpycqu.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB error:", err));
