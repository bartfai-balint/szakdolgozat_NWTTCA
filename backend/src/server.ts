import express from "express";
import cors from "cors";
import { sample_coins, sample_tags } from "./data";

const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/coins", (req, res) => {
    res.send(sample_coins);
})

app.get("/api/coins/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const coins =  sample_coins
        .filter(coin => coin.name.toLowerCase()
        .includes(searchTerm.toLowerCase()));
        res.send(coins);
})

app.get("/api/coins/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/coins/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const coins = sample_coins.filter(coin => coin.tags?.includes(tagName));
    res.send(coins);
})

app.get("/api/coins/:coinId", (req, res) => {
    const coinId = req.params.coinId;
    const coin = sample_coins.find(coin => coin.id == coinId);
    res.send(coin);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})