import express from "express";
import v1 from "./v1";

const decury = express();

decury.use("/v1", v1);
decury.use((req, res) => res.status(404).send({"status": 404}));

decury.listen(8080);
