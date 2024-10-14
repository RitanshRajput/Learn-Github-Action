const express = require("express");
const dotenv = require("dotenv");
const calculatorRoutes = require("./routes/calculator");
const secretRoutes = require("./routes/secret");

dotenv.config();

const app = express();
app.use(express.json());

app.use("./api/calculator", calculatorRoutes);
app.use("/api", secretRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
