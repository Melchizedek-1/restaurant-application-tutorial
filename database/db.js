const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://baron:admin@cluster0.qcyro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connection success');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;