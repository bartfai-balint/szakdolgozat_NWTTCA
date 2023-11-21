import { Router } from "express";
import { sample_coins, sample_tags } from "../data";
import asyncHandler from 'express-async-handler';
import { CoinModel } from "../models/coin.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const coinsCount = await CoinModel.countDocuments();
        if(coinsCount > 0) {
            res.send("Seed is already done!");
            return;
        }
        await CoinModel.create(sample_coins.map(coin=>({...coin,id: null})));
        res.send("Seed is done!");
    })
);

router.get("/", asyncHandler(
    async (req, res) => {
    const coins = await CoinModel.find();
    res.send(coins);
}));

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const coins = await CoinModel.find({name: {$regex:searchRegex}})
            res.send(coins);
    }
));

router.get("/tags", asyncHandler(
    async(req, res) => {
        const tags = await CoinModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name: 'All',
            count: await CoinModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
    }
));

router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const coins = await CoinModel.find({tags: req.params.tagName})
        res.send(coins);
    }
));

router.get("/:coinId", asyncHandler(
    async(req, res) => {
        const coin = await CoinModel.findById(req.params.coinId)
        res.send(coin);
    }
));

export default router;