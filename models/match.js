const mongoose =  require("mongoose");

const matchSchema = mongoose.Schema({
    player_1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        require: true
    },
    player_2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        require: true
    },
    player_3: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        require: false
    },
    player_4: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        require: false
    },
    message: {
        type: String,
        require: false
    }
});

matchSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
matchSchema.set('toJSON', {
    virtuals: true,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;