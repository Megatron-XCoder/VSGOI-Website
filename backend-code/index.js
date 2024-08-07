const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoute = require('./routes/Signup');
const signinRoute = require('./routes/Signin');


const PORT = 3000;
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use("/signup", signupRoute);
app.use("/signin", signinRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
