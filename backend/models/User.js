const mongoose = require('mongoose');

const userSchema = new mongoose.Schama({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String
    },
    location: {
        address: String,
        lng: Number,
        lat: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['vendor', 'supplier', 'admin'],
        required: true
    },
    passHash: {
        type: String,
        required: true
    },
    status: {
        type:String,
        enum: ['pending', 'approved', 'rejected'],
        default:'pending'
    },
    shopName: {
        type:String
    },
    documents:{
        shopImgUrl:String,
        idProofUrl:String,
        gstNumber:String
    },
    ratings:{
        stars:{
            tyep:Number,
            default:0
        },
        reviewCount:{
            type:Number,
            default:0
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('User', userSchema);