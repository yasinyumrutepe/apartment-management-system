

const express = require('express');
const apartmentRoute = require("./routes/apartment");
const invoiceRoute = require("./routes/invoice");
const authRoute = require("./routes/auth");
const neighborRoute = require("./routes/neighbor");
app = express();

//Routes
app.use("/auth", authRoute);
app.use("/apartment", apartmentRoute);
app.use("/invoice", invoiceRoute);
app.use("/neighbor", neighborRoute);
//Routes And Endpoints





const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});