const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const MongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./db/mongo");
const AppError = require("./utils/appError.js");
const globalErrorController = require("./controllers/errorController");
const generalRouter = require("./generalRouter.js");

const app = express();

const limiter = rateLimit({
  max: 100,
  message: "too many limits ,try again in an hour",
  windowMs: 60 * 60 * 1000 //time
});
// middleWARE
//for security headers
app.use(helmet());
//for limiting reqest by ip
app.use("/api", limiter);
//for logging req
app.use(morgan("dev"));
//for parsing json into req.body
app.use(express.json({ limit: "10kb" }));
//for parsing cookies
app.use(cookieParser());
//for filtering out Nosql querry injection
app.use(MongoSanitize());
//for filtering out XSS scripts
app.use(xss());
//for trusting proxy on heroku and production
app.enable("trust proxy");
//using cors
app.use(cors());
app.options("*", cors());
//for parsing data that is coming from form
app.use(express.urlencoded({ extended: true }));
//for serving static files
app.use(express.static(`${__dirname}/build`));
// making routes here

//general route here
app.use("/api/v1", generalRouter);
//when no page is match
app.all("*", (req, res, next) => {
  next(new AppError("cant find anything with your requested url", 404));
});

//error handling middle middleWARE
app.use(globalErrorController);
module.exports = app;
