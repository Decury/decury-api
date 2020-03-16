import express from "express";
import test from "./functions/test";

const v1 = express();

v1.use("/test", test);

export default v1;
