const atmModel = require('../models/atmModel');

//Get Data
const getData = async (req, res) => {
    try {
        const atm = await atmModel.find()
            .then(data => {
                res.status(200).json({
                    "all-data": {
                        "bills": {
                            "200": data[0].atm.bills["200"],
                            "100": data[0].atm.bills["100"],
                            "50": data[0].atm.bills["50"],
                            "20": data[0].atm.bills["20"],
                        },
                        "coins": {
                            "10": data[0].atm.coins["10"],
                            "5": data[0].atm.coins["5"],
                            "2": data[0].atm.coins["2"],
                            "1": data[0].atm.coins["1"],
                            "0.5": data[0].atm.coins["05"],
                            "0.1": data[0].atm.coins["01"],
                            "0.01": data[0].atm.coins["001"],
                        }
                    }
                })
            })
            .catch(err => { res.status(400).json(err.message) });
    }
    catch (e) {
        console.log(e.message);
    }
}

const withdrawal = async (req, res) => {
    try {
        const body = req.body
        const amount = body.amount
        const array = (amount).toString().split('.');

        if (array[1].length == 1 && array[1][0] != "0")
            amount2 = Number(array[1]) * 10;
        else amount2 = Number(array[1])


        let atmM = await atmModel.find();
        if (!atmM) {

        }
        else {
            const atm = atmM[0]._doc
            let bill200Count = (amount1 / 200) - (amount1 % 200 / 200)
            if (bill200Count <= atm.atm.bills["200"]) {
                atm.atm.bills["200"] -= bill200Count;
            } else {
                bill200Count = atm.atm.bills["200"];
                atm.atm.bills["200"] = 0;
            }

            amount1 = amount1 - (bill200Count * 200);

            let bill100Count = (amount1 / 100) - (amount1 % 100 / 100)
            if (bill100Count <= atm.atm.bills["100"]) {
                atm.atm.bills["100"] -= bill100Count;
            } else {
                bill100Count = atm.atm.bills["100"];
                atm.atm.bills["100"] = 0;
            }

            amount1 = amount1 - (bill100Count * 100);


            let bill50Count = (amount1 / 50) - (amount1 % 50 / 50)
            if (bill50Count <= atm.atm.bills["50"]) {
                atm.atm.bills["50"] -= bill50Count;
            } else {
                bill50Count = atm.atm.bills["50"];
                atm.atm.bills["50"] = 0;
            }

            amount1 -= bill50Count * 50;

            let bill20Count = (amount1 / 20) - (amount1 % 20 / 20)
            if (bill20Count <= atm.atm.bills["20"]) {
                atm.atm.bills["20"] -= bill20Count;
            } else {
                bill20Count = atm.atm.bills["20"];
                atm.atm.bills["20"] = 0;
            }

            amount1 -= bill20Count * 20;

            let coin10Count = (amount1 / 10) - (amount1 % 10 / 10)
            if (coin10Count <= atm.atm.coins["10"]) {
                atm.atm.coins["10"] -= coin10Count;
            } else {
                coin10Count = atm.atm.coins["10"];
                atm.atm.coins["10"] = 0;
            }

            amount1 = amount1 - (coin10Count * 10);

            let coin5Count = (amount1 / 5) - (amount1 % 5 / 5)
            if (coin5Count <= atm.atm.coins["5"]) {
                atm.atm.coins["5"] -= coin5Count;
            } else {
                coin5Count = atm.atm.coins["5"];
                atm.atm.coins["5"] = 0;
            }

            amount1 -= coin5Count * 5;

            let coin2Count = (amount1 / 2) - (amount1 % 2 / 2)
            if (coin2Count <= atm.atm.coins["2"]) {
                atm.atm.coins["2"] -= coin2Count;
            } else {
                coin2Count = atm.atm.coins["2"];
                atm.atm.coins["2"] = 0;
            }

            amount1 -= coin2Count * 2;

            let coin1Count = (amount1 / 1) - (amount1 % 1 / 1)
            if (coin1Count <= atm.atm.coins["1"]) {
                atm.atm.coins["1"] -= coin1Count;
            } else {
                coin1Count = atm.atm.coins["1"];
                atm.atm.coins["1"] = 0;
            }

            amount1 -= coin1Count * 1;

            let coin05Count = (amount2 / 50) - (amount2 % 50 / 50)
            if (coin05Count <= atm.atm.coins["05"]) {
                atm.atm.coins["05"] -= coin05Count;
            } else {
                coin05Count = atm.atm.coins["05"];
                atm.atm.coins["05"] = 0;
            }

            amount2 -= coin05Count * 50;

            let coin01Count = (amount2 / 10) - (amount2 % 10 / 10)
            if (coin01Count <= atm.atm.coins["01"]) {
                atm.atm.coins["01"] -= coin01Count;
            } else {
                coin01Count = atm.atm.coins["01"];
                atm.atm.coins["01"] = 0;
            }

            amount2 -= coin01Count * 10;

            let coin001Count = (amount2 / 1) - (amount2 % 1 / 1)
            if (coin001Count <= atm.atm.coins["001"]) {
                atm.atm.coins["001"] -= coin001Count;
            } else {
                coin001Count = atm.atm.coins["001"];
                atm.atm.coins["001"] = 0;
            }

            amount2 -= coin001Count * 1;
            let bills = {};
            let coins = {};

            let sumCoins = coin10Count + coin5Count + coin2Count + coin1Count + coin05Count + coin01Count + coin001Count;
            //sumCoins = 51
            if (sumCoins > 50)
                throw new Error("TooMuchCoinsException")

            if (bill20Count > 0) {
                Object.assign(bills, { "20": bill20Count })
            }

            if (bill50Count > 0) {
                Object.assign(bills, { "50": bill50Count })
            }

            if (bill100Count > 0) {
                Object.assign(bills, { "100": bill100Count })
            }

            if (bill200Count > 0) {
                Object.assign(bills, { "200": bill200Count })
            }

            if (coin001Count > 0) {
                Object.assign(coins, { "0.01": coin001Count })
            } if (coin01Count > 0) {
                Object.assign(coins, { "0.1": coin01Count })
            }
            if (coin05Count > 0) {
                Object.assign(coins, { "0.5": coin05Count })
            }
            if (coin1Count > 0) {
                Object.assign(coins, { "1": coin1Count })
            } if (coin2Count > 0) {
                Object.assign(coins, { "2": coin2Count })
            }
            if (coin5Count > 0) {
                Object.assign(coins, { "5": coin5Count })
            }

            if (coin10Count != 0) {
                Object.assign(coins, { "10": coin10Count })
            }

            const updateAtm = new atmModel({
                _id: atm._id,
                atm: {
                    bills: {
                        "200": atm.atm.bills["200"],
                        "100": atm.atm.bills["100"],
                        "50": atm.atm.bills["50"],
                        "20": atm.atm.bills["20"]
                    },
                    coins: {
                        "10": atm.atm.coins["10"],
                        "5": atm.atm.coins["5"],
                        "2": atm.atm.coins["2"],
                        "1": atm.atm.coins["1"],
                        "'05'": atm.atm.coins["0.5"],
                        "'01'": atm.atm.coins["0.1"],
                        "'001'": atm.atm.coins["0.01"]
                    }
                }
            });
            await atmModel.updateOne({ _id: atm._id }, updateAtm)
                .then(result => {
                })
                .catch(err => {
                    res.status(500).json({
                        err: err
                    })
                })
            let result = {}
            if (Object.keys(bills).length != 0) {
                Object.assign(result, { "bills": [bills] })
            }
            if (Object.keys(coins).length != 0) {
                Object.assign(result, { "coins": [coins] })
            }
            res.status(200).json({
                "result": result
            })
        }
    } catch (e) {
        res.status(500).json({
            err: e.message
        })
    }
}

const adding = async (req, res) => {
    const amount = req.params.currency

    const array = (amount).toString().split('.');

    let amount1 = Number(array[0]);
    let amount2 = Number(array[1]) * 10;
    if (array[1].length == 1 && array[1][0] != "0")
        amount2 = Number(array[1]) * 10;
    else amount2 = Number(array[1])

    let atmM = await atmModel.find();
    if (!atmM) {

    }
    else {
        const atm = atmM[0]._doc
        let bill200Count = (amount1 / 200) - (amount1 % 200 / 200)
        amount1 = amount1 - (bill200Count * 200);

        let bill100Count = (amount1 / 100) - (amount1 % 100 / 100)
        amount1 = amount1 - (bill100Count * 100);


        let bill50Count = (amount1 / 50) - (amount1 % 50 / 50)
        amount1 -= bill50Count * 50;

        let bill20Count = (amount1 / 20) - (amount1 % 20 / 20)
        amount1 -= bill20Count * 20;

        let coin10Count = (amount1 / 10) - (amount1 % 10 / 10)
        amount1 = amount1 - (coin10Count * 10);

        let coin5Count = (amount1 / 5) - (amount1 % 5 / 5)
        amount1 -= coin5Count * 5;

        let coin2Count = (amount1 / 2) - (amount1 % 2 / 2)
        amount1 -= coin2Count * 2;

        let coin1Count = (amount1 / 1) - (amount1 % 1 / 1)
        amount1 -= coin1Count * 1;

        let coin05Count = (amount2 / 50) - (amount2 % 50 / 50)
        amount2 -= coin05Count * 50;

        let coin01Count = (amount2 / 10) - (amount2 % 10 / 10)
        amount2 -= coin01Count * 10;

        let coin001Count = (amount2 / 1) - (amount2 % 1 / 1)
        amount2 -= coin001Count * 1;

        const updateAtm = new atmModel({
            _id: atm._id,
            atm: {
                bills: {
                    "200": atm.atm.bills["200"] + bill200Count,
                    "100": atm.atm.bills["100"] + bill100Count,
                    "50": atm.atm.bills["50"] + bill50Count,
                    "20": atm.atm.bills["20"] + bill20Count
                },
                coins: {
                    "10": atm.atm.coins["10"] + coin10Count,
                    "5": atm.atm.coins["5"] + coin5Count,
                    "2": atm.atm.coins["2"] + coin2Count,
                    "1": atm.atm.coins["1"] + coin1Count,
                    "05": atm.atm.coins["05"] + coin05Count,
                    "01": atm.atm.coins["01"] + coin01Count,
                    "001": atm.atm.coins["001"] + coin001Count
                }
            }
        });
        await atmModel.updateOne({ _id: atm._id }, updateAtm)
            .then(result => {
                res.status(200).json({
                    message: "ATM updated successfully!"
                });
            })
            .catch(err => {
                res.status(500).json({
                    err: err
                })
            })
    }
}

module.exports = {
    withdrawal, adding, getData
}