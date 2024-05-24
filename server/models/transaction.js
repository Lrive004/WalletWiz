const mongoose = require('mongoose');

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: date,
        default: date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('transaction', transactionSchema);