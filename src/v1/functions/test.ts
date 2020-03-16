import express from "express";

const test = express();

test.get("/", (req, res) => {
    res.send({"status": 200});
});

export default test;
