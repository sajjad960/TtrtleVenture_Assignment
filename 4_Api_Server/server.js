const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");

// Local DB
mongoose.connect(process.env.LOCAL_DATABASE).then(() => console.log("DB connection successful"))


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app running on the port ${port}`);
});