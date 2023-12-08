const express = require("express");
const cors = require("cors");
const session = require("express-session");
const swaggerJsdoc = require("swagger-jsdoc");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const cookieParser = require("cookie-parser");
const { swaggerOptions } = require("./utils/constants.js");
const connectDB = require("./database/db");

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.EXPRESS_SESSION,
    resave: true,
    saveUninitialized: true,
  })
);

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// >> Routes
const storyRoutes = require("./routes/story.routes.js");

app.use("/api/story", storyRoutes);

app.listen(process.env.PORT, () => {
  console.log(`API-SERVER >> Server running on port ${process.env.PORT}`);
  connectDB();
});
