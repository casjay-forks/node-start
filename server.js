const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('DB CONNECTED'))
.catch(e => console.error(e));

app.listen(process.env.PORT, () => console.log('SERVER IS RUNNING ON PORT', process.env.PORT));
