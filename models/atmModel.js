const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const atmSchema = new Schema({
    atm: { 
        bills:{
            "200":{type: Number, default:0},
            "100":{type: Number, default:0},
            "50":{type: Number, default:0},
            "20":{type: Number, default:0}

        },
        coins:{
            "10":{type: Number, default:0},
            "5":{type: Number, default:0},
            "2":{type: Number, default:0},
            "1":{type: Number, default:0},
            "05":{type: Number, default:0},
            "01":{type: Number, default:0},
            "001":{type: Number, default:0}
        }
     }
    
});

const Atm = mongoose.model("data", atmSchema);
module.exports = Atm;
