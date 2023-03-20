import http from "http";
import express from "express";
import router from "./router.js";

const app = express();
app.use(router);
app.listen(5000, () => {
  console.log("Server running : " + "http://localhost:5000");
});
