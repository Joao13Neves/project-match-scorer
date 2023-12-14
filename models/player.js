const mongoose =  require("mongoose");

const playerSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    total_loses: {
        type: Number,
        default: 0,
        required: false,
    },  
    total_wins: {
        type: Number,
        default: 0,
        required: false,
    },
    total_matches: {
        type: Number,
        default: 0,
        required: false,
    },
    total_points: {
        type: Number,
        default: 0,
        required: false,
    }

});

playerSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
playerSchema.set('toJSON', {
    virtuals: true,
});


const Player = mongoose.model('Player', playerSchema);

module.exports = Player;