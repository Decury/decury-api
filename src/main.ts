import express from "express";
import v1 from "./v1";


import { program } from "commander";

program.option("-p, --port <number>", "api port", parseInt, 8080);
program.parse(process.argv);


const decury = express();
decury.use("/v1", v1);
decury.use((req, res) => res.status(404).send({"status": 404}));

if (
    typeof program.port == "number" &&
    program.port <= 65535 &&
    program.port >= 1
) decury.listen(program.port);
